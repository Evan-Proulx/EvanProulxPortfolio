import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import Card3d from 'card3d';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();

  clickedOutside = false;
  ngAfterViewInit() {
    // Initialize Card3d on the desired element
    const cardElement = document.querySelector('.card');
    if (cardElement) {
      new Card3d(<HTMLElement>cardElement, {
        delta: 10,
        perspective: 300,
        glareOpacity: 0.5,
        axis: 'all',
        scale: 1.05,
        fullPageListening: true,
      });
      }
  }
  closeModal(){
    this.close.emit();
  }
}
