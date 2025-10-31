import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { LocalstorageService } from '../../Core/Services/localstorage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName = "Mohamed Ahmed";
  userEmail = "mohamed@example.com";

  isDarkMode = false;
  langOpen = false;
  userOpen = false;
  notifOpen = false;

  toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.documentElement.classList.toggle("dark", this.isDarkMode);
}

  @Output() toggle = new EventEmitter<void>();

  isSidebarOpen : boolean = false;

  currentLang: string = 'en';

  constructor(
    private renderer: Renderer2,
    private eRef: ElementRef,
    private localStorage: LocalstorageService,
    private router: Router
  ) {}

  // Open Sidebar
  openSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggle.emit();
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  setLangAttribute(lang: string) {
    this.renderer.setAttribute(document.body, 'lang', lang);
  }

  // Dropdown Toggles
  toggleLanguageDropdown() {
    this.langOpen = !this.langOpen;
    this.userOpen = false;
  }

  toggleUserDropdown() {
    this.userOpen = !this.userOpen;
    this.langOpen = false;
  }

  toggleNotificationDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.notifOpen = !this.notifOpen;
    this.userOpen = false;
    this.langOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.langOpen = false;
      this.userOpen = false;
      this.notifOpen = false;
    }
  }

  // Logout
  logout() {
    this.localStorage.clearToken();
    this.router.navigate(['/login']);
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.langOpen = false;
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    this.setLangAttribute(lang);
  }
}
