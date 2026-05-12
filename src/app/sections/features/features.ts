import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features-section">
      <div class="container">
        <div class="features-header">
          <h2>Fortaleça Seu Corpo,<br>Acalme Sua Mente</h2>
          <p>Esta aula suave utiliza posturas no chão e alongamentos longos para<br>dissolver a tensão acumulada no corpo.</p>
        </div>

        <div class="features-grid">
          <div class="feature-image">
            <img src="assets/images/Yoga ao ar livre.png" alt="Yoga ao ar livre">
          </div>

          <div class="feature-cards">
            <div class="card card-wide">
              <h3>Melhore sua Concentração</h3>
              <p>Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.</p>
            </div>
            
            <div class="card-row">
              <div class="card card-green">
                <h3>Flexibilidade</h3>
                <p>Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.</p>
              </div>
              <div class="card card-white">
                <h3>Postura e Equilíbrio</h3>
                <p>Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-section {
      padding: 80px 20px;
      background-color: #fafafa;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .features-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .features-header h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      color: #547c6a;
      margin-bottom: 20px;
    }
    .features-header p {
      font-family: 'Open Sans', sans-serif;
      color: #707070;
      line-height: 1.6;
    }
    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: stretch;
    }
    .feature-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
    }
    .feature-cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .card {
      border-radius: 30px;
      padding: 40px;
      font-family: 'Open Sans', sans-serif;
    }
    .card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    .card p {
      font-size: 0.9rem;
      line-height: 2.3;
    }
    .card-wide {
      background-color: white;
      border: 1px solid #eee;
    }
    .card-wide h3 { color: #547c6a; }
    .card-wide p { color: #707070; }
    
    .card-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      height: 100%;
    }
    .card-green {
      background-color: #547c6a;
      color: white;
    }
    .card-green h3 { color: white; }
    
    .card-white {
      background-color: white;
      border: 1px solid #eee;
    }
    .card-white h3 { color: #547c6a; }
    .card-white p { color: #707070; }
  `]
})
export class FeaturesComponent {}