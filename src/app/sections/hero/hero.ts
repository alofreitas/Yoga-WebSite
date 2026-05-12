/* src/app/sections/hero/hero.component.ts */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container hero-container">
      
        <div class="hero-content">
          <h1 class="hero-title">ENCONTRE O SEU EQUILÍBRIO</h1>
          <p class="hero-subtitle">Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.</p>
          <div class="hero-buttons">
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.scss'] 
})
export class HeroComponent {}