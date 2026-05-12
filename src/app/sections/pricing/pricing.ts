import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pricing-section">
      <div class="container">
        
        <div class="pricing-header">
          <h2 class="section-title">Escolha o plano ideal para você!</h2>
          <p class="section-subtitle">Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão<br>acumulada no corpo.</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card" *ngFor="let plan of plans">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-desc">What payment methods.</p>
            
            <div class="price-box">
              {{ plan.price | currency:'BRL':'symbol':'1.2-2' }}/ mês
            </div>

            <ul class="feature-list">
              <li *ngFor="let feature of plan.features">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#547c6a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="faq-section">
          <h2 class="faq-title">Perguntas Frequentes</h2>
          
          <div class="faq-list">
            <div class="faq-item" *ngFor="let faq of faqs">
              <span class="faq-question">{{ faq.question }}</span>
              <div class="faq-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .pricing-section {
      padding: 80px 20px;
      background-color: var(--color-background-light, #fafafa);
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    .pricing-header {
      text-align: center;
      margin-bottom: 50px;
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      color: #547c6a;
      margin-bottom: 20px;
    }
    .section-subtitle {
      font-family: 'Open Sans', sans-serif;
      color: #707070;
      line-height: 1.6;
    }

    /* Estilos dos Cards */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .pricing-card {
      background-color: white;
      padding: 40px 30px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border: 1px solid #eee;
      text-align: left;
    }
    .plan-name {
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 10px;
    }
    .plan-desc {
      font-family: 'Open Sans', sans-serif;
      color: #707070;
      font-size: 0.9rem;
      margin-bottom: 30px;
    }
    .price-box {
      background-color: #6a8c7b; /* Verde um pouco mais suave para a caixa */
      color: white;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
      padding: 15px 0;
      text-align: center;
      border-radius: 50px; /* Bordas bem arredondadas como no Figma */
      margin-bottom: 30px;
    }
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .feature-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 15px;
      font-family: 'Open Sans', sans-serif;
      font-size: 0.9rem;
      color: #707070;
    }

    /* Estilos do FAQ (Perguntas Frequentes) */
    .faq-section {
      margin-top: 100px;
    }
    .faq-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      color: #547c6a;
      text-align: center;
      margin-bottom: 40px;
    }
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .faq-item {
      background-color: white;
      padding: 20px 30px;
      border-radius: 50px; /* Formato de pílula */
      box-shadow: 0 5px 15px rgba(0,0,0,0.03);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .faq-item:hover {
      transform: translateY(-2px);
    }
    .faq-question {
      font-family: 'Open Sans', sans-serif;
      color: #333;
      font-size: 1rem;
    }
    .faq-arrow {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class PricingComponent {
  // Dados dos planos
  plans = [
    { 
      name: 'Básico', 
      price: 20.90, 
      features: ['Pix', 'Cartão de Débito', 'Cartão de Crédito', 'Dinheiro'] 
    },
    { 
      name: 'Intermediário', 
      price: 42.90, 
      features: ['Pix', 'Cartão de Débito', 'Cartão de Crédito', 'Dinheiro'] 
    },
    { 
      name: 'Avançado', 
      price: 63.90, 
      features: ['Pix', 'Cartão de Débito', 'Cartão de Crédito', 'Dinheiro'] 
    }
  ];

  // Dados do FAQ
  faqs = [
    { question: 'Nunca pratiquei yoga antes. Posso participar mesmo sendo iniciante?' },
    { question: 'Não sou nada flexível. O yoga é indicado para mim?' },
    { question: 'Quantas vezes por semana é recomendado praticar para sentir os benefícios?' },
    { question: 'Preciso levar meu próprio tapete ou usar alguma roupa específica para a aula?' }
  ];
}