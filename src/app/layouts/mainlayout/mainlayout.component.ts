import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet , SidebarComponent , NavbarComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

    sidebarOpen = false;

  lang : string = 'en' ;

  constructor() {
    // private languageService: LanguageService
    // this.languageService.getLanguage().subscribe((lang) => {
    //   this.lang = lang
    // });
    // console.log(this.lang);

  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }


}
