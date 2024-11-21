import {Component, Renderer2} from '@angular/core';
import {NgIf} from "@angular/common";
import {TestComponent} from "../test/test.component";
import {AboutComponent} from "../about/about.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    TestComponent,
    AboutComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  resumeDisplayed: boolean = false;
  aboutDisplayed: boolean = false;
  darkModeEnabled = false

  constructor(private renderer: Renderer2) {}

  toggleResume() {
    this.resumeDisplayed =!this.resumeDisplayed;
  }
  toggleAbout() {
    this.aboutDisplayed =!this.aboutDisplayed;
  }

  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
