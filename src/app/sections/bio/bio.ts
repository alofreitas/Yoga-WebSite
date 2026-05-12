import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre" class="bio-section">
      <div class="container bio-grid">
        <div class="bio-content">
          <h2>Muito prazer,<br>Eu sou Taíse Coutinho</h2>
          <p>Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.</p>
          <button class="btn-primary">Quero Participar</button>
        </div>
        <div class="bio-image">
          <img src="assets/images/taise-bio.png" alt="Taíse Coutinho">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bio-section {
      padding: 80px 20px;
      background-color: #fafafa;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    .bio-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .bio-content h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      color: #547c6a;
      margin-bottom: 20px;
      line-height: 1.2;
      font-weight: 500;
    }
    .bio-content p {
      font-family: 'Open Sans', sans-serif;
      color: #707070;
      line-height: 1.6;
      margin-bottom: 40px;
    }
    .btn-primary {
      background-color: #547c6a;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1rem;
      cursor: pointer;
    }
    .bio-image img {
      width: 100%;
      border-radius: 40px;
      object-fit: cover;
    }
  `]
})
export class BioComponent {}