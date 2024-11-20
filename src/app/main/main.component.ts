import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {TestComponent} from "../test/test.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    TestComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  resumeDisplayed: boolean = false;

  toggleResume() {
    this.resumeDisplayed =!this.resumeDisplayed;
  }
}
