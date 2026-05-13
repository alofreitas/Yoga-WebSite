import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss']
})
export class PricingComponent {
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

  faqs = [
    { question: 'Nunca pratiquei yoga antes. Posso participar mesmo sendo iniciante?' },
    { question: 'Não sou nada flexível. O yoga é indicado para mim?' },
    { question: 'Quantas vezes por semana é recomendado praticar para sentir os benefícios?' },
    { question: 'Preciso levar meu próprio tapete ou usar alguma roupa específica para a aula?' }
  ];
}