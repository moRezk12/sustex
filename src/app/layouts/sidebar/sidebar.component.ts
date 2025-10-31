import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() closeSidebar = new EventEmitter<void>();

  toggleSidebar() {
    this.closeSidebar.emit();
  }

  links = [
    { name: 'Golden nominations service', icon: 'fa-home', link: '/golden' },
    { name: 'Smart Self-Assessment', icon: 'fa-tasks', link: '/smart-self' },
    { name: ' Improvement Suggestion Generator  ', icon: 'fa-tasks', link: '/improvement' },
    { name: ' Smart Training Assessment Environment  ', icon: 'fa-tasks', link: '/smart-training' },
    { name: ' Pioneering Experiences in Excellence  ', icon: 'fa-tasks', link: '/pioneering' },
    { name: '  Guidance Manuals ', icon: 'fa-tasks', link: '/guidance' },
    { name: '  Automated Chat (Labib) ', icon: 'fa-tasks', link: '/auttimated-chat' },
    { name: ' Live Chat with an Expert (Book an Appointment) ', icon: 'fa-tasks', link: '/live-chat' },
  ];

  toggleDropdown(clickedItem: any) {
    // this.links.forEach(item => item.children && (item.open = item === clickedItem ? !item.open : false));
  }

  closeAllDropdowns() {
    // this.links.forEach(item => item.children && (item.open = false));
    this.toggleSidebar();
  }
}

// {
//   name: 'Users', icon: 'fa-users', open: false,
//   children: [
//     { name: 'List User', icon: 'fa-user-plus', link: '/list-user' },
//     { name: 'Powers', icon: 'fa-user-shield', link: '/powers' }
//   ]
// },
// { name: 'Report', icon: 'fa-chart-bar', link: '/report' },
// { name: 'Objections', icon: 'fa-thumbs-down', link: '/objections' },
// { name: 'Question Rating Reports', icon: 'fa-poll', link: '/question-rating-reports' },
// { name: 'Ratings', icon: 'fa-star', link: '/ratings' },
// { name: 'Sites', icon: 'fa-map-marker-alt', link: '/sites' },
// {
//   name: 'Quetions', icon: 'fa-question-circle', open: false,
//   children: [
//     { name: 'Add Question', icon: 'fa-plus-circle', link: '/add-question' },
//     { name: 'Question Score', icon: 'fa-clipboard-check', link: '/question-score' },
//     { name: 'Import Questions', icon: 'fa-file-import', link: '/import-questions' }
//   ]
// },
// { name: 'Settings', icon: 'fa-cog', link: '/settings' }
