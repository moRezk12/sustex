import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gradeLevel = '7th grade';
  numberSlides = 6;
  topic = '';
  additional = '';
  apiKey = '';
  loading = false;

  slides: { title: string; paragraph: string; questions: string[] }[] = [];
  fullReport = '';

  gradeOptions = [
    'Kindergarten', '1st grade', '2nd grade', '3rd grade',
    '4th grade', '5th grade', 'Middle School', 'High School'
  ];

  private buildPrompt(): string {
    return `
You are an expert educational assistant that generates educational slide decks in structured JSON format.

Create exactly ${this.numberSlides} slides for ${this.gradeLevel} about "${this.topic}".
Each slide must include:
- "title": a clear engaging title
- "paragraph": a short kid-friendly explanation
- "questions": an array of 15 unique, creative, and thought-provoking questions about that slide only

After all slides, include a field called "report" that contains a 2–3 paragraph text summary explaining what the full presentation teaches.

Return ONLY valid JSON in this format (no explanations, no markdown):

{
  "slides": [
    { "title": "Slide 1 title", "paragraph": "text...", "questions": ["Q1", "Q2", "..."] },
    { "title": "Slide 2 title", "paragraph": "text...", "questions": ["Q1", "Q2", "..."] }
  ],
  "report": "Your summary text..."
}

${this.additional ? 'Extra instructions: ' + this.additional : ''}
`;
  }

  async generateAI() {
    if (!this.topic.trim()) {
      alert('Please enter a topic.');
      return;
    }

    this.loading = true;
    this.slides = [];
    this.fullReport = '';

    try {
      const prompt = this.buildPrompt();
      const useMock = !this.apiKey;

      if (useMock) {
        this.slides = this.generateMock();
        this.fullReport = `Mock Report: This is a placeholder report for topic "${this.topic}".`;
        this.loading = false;
        return;
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a JSON-producing educational AI assistant.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 5000
        })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenAI error: ${response.status} ${text}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content?.trim();

      if (!content) throw new Error('Empty AI response.');

      const cleaned = content.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);

      this.slides = parsed.slides || [];
      this.fullReport = parsed.report || 'No report found.';
    } catch (err: any) {
      console.error('Error:', err);
      alert('Error generating slides: ' + err.message);
    } finally {
      this.loading = false;
    }
  }

  generateMock() {
    const mockSlides = [];
    for (let i = 1; i <= this.numberSlides; i++) {
      const questions = Array.from({ length: 15 }, (_, q) => `Question ${q + 1}: Think about part ${i}.${q + 1}.`);
      mockSlides.push({
        title: `Slide ${i}: ${this.topic}`,
        paragraph: `This is a sample explanation for slide ${i} about ${this.topic}.`,
        questions
      });
    }
    return mockSlides;
  }

async exportToPDF() {
  const pdf = new jsPDF({ unit: 'px', format: 'a4' });
  const slidesEl = document.getElementById('slides-preview');
  if (!slidesEl) return;

  const slideNodes = slidesEl.querySelectorAll('.pg-slide');

  for (let i = 0; i < slideNodes.length; i++) {
    const node = slideNodes[i] as HTMLElement;

    // fix background colors (to ensure clean white PDF)
    node.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      if (style.backgroundColor.includes('oklch')) (el as HTMLElement).style.backgroundColor = '#fff';
      if (style.color.includes('oklch')) (el as HTMLElement).style.color = '#000';
    });

    const canvas = await html2canvas(node, { scale: 2 });
    const img = canvas.toDataURL('image/png');
    const props = pdf.getImageProperties(img);
    const w = pdf.internal.pageSize.getWidth();
    const h = (props.height * w) / props.width;

    if (i > 0) pdf.addPage();
    pdf.addImage(img, 'PNG', 0, 0, w, h);
  }

  pdf.save(`${this.topic}_slides_only.pdf`);
}

}
