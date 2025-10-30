import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // ضع المفتاح الخاص بك هنا مؤقتًا فقط
  apiKey: string = "PUT_YOUR_OPENAI_KEY_HERE";

  criterion = '';
  model = '';
  generatedText = '';
  loading = false;

  constructor(private http: HttpClient) {}

  generateText() {
    this.loading = true;

    const systemPrompt = `
You are an expert writer specialized in award documentation and evaluation criteria.
Your task is to generate a professional and well-structured paragraph that explains the given excellence criterion
in the context of the selected award model.

Your output must:
- Be in Arabic.
- Be formal and professional.
- Length: 100–150 words.

Criterion: ${this.criterion}
Award model: ${this.model}

Now write the paragraph in Arabic.
`;

    const body = {
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: systemPrompt }
      ]
    };

    this.http.post("https://api.openai.com/v1/chat/completions", body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      }
    }).subscribe((res: any) => {
      this.generatedText = res.choices[0].message.content;
      this.loading = false;
    }, err => {
      console.log(err);
      alert("خطأ أثناء الاتصال بـ OpenAI");
      this.loading = false;
    });
  }


  exportPDF() {
    const element = document.createElement('a');
    const file = new Blob([this.generatedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "generated.txt";
    element.click();
  }

}
