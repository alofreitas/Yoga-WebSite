import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Nossos Clientes</h2>
        
      <div class="clients-background">
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let item of testimonials">
            <div class="stars">
              <span *ngFor="let s of [1,2,3,4,5]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1c40f">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </span>
            </div>
            
            <p class="testimonial-text">"{{ item.text }}"</p>
            
            <div class="testimonial-footer">
              <span class="author-name">{{ item.name }}</span>
              <img [src]="item.photo" alt="{{ item.name }}" class="author-photo">
            </div>
          </div>
        </div>

        <div class="nav-arrows">
          <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></div>
          <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
        </div>
      </div>
</div>
    </section>

    <section id="contato" class="contact-section">
      <div class="container contact-grid">
        
        <div class="contact-form-side">
          <p class="form-lead">Precisando de ajuda?</p>
          <h2 class="form-title">Fale Conosco</h2>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label>Nome</label>
              <input type="text" formControlName="name" placeholder="Seu Nome">
            </div>
            
            <div class="form-group">
              <label>Email</label>
              <input type="email" formControlName="email" placeholder="seuemail@gmail.com">
            </div>

            <div class="form-group">
              <label>Telefone</label>
              <input type="text" formControlName="phone" placeholder="(00) 00000-0000">
            </div>
            
            <div class="form-group">
              <label>Mensagem</label>
              <textarea formControlName="message" rows="4" placeholder="Escreva sua mensagem..."></textarea>
            </div>
            
            <button type="submit" class="btn-submit">Enviar Mensagem</button>
          </form>
        </div>

        <div class="contact-image-side">
          <img src="assets/images/Mulher rosa yoga.png" alt="Yoga Stretching" class="side-img">
        </div>
      </div>
    </section>

    <footer class="footer-section">
      <div class="container footer-container">
        <div class="footer-logo">
          <img src="assets/icons/logo.svg" alt="Logo" class="logo-icon white-logo" onerror="this.style.display='none'">
          <span class="footer-logo-text">TAÍSE YOGA</span>
        </div>
        
        <div class="footer-info">
          <p class="footer-phone">TELEFONE</p>
          </div>
      </div>
    </footer>
  `,
  styles: [`
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
    
    .testimonials-section { padding: 80px 0; background-color: #fafafa; text-align: center; }
    .section-title { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; color: #547c6a;}
    //.clients-background { background-color: #557A6672;; padding: 40px; border-radius: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative; width: 500px; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
    .testimonial-card { background: white; padding: 30px; border-radius: 20px; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative; }
    .stars { margin-bottom: 15px; display: flex; gap: 2px; }
    .testimonial-text { font-family: 'Open Sans', sans-serif; color: #555; line-height: 1.6; font-size: 0.95rem; margin-bottom: 25px; }
    .testimonial-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0f0f0; padding-top: 15px; }
    .author-name { font-family: 'Open Sans', sans-serif; font-weight: 600; color: #333; }
    .author-photo { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
    .nav-arrows { display: flex; justify-content: center; gap: 15px; margin-top: 20px; }
    .arrow { width: 45px; height: 45px; border-radius: 50%; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #777; cursor: pointer; }

    .contact-section { padding: 100px 0 0 0; background-color: white; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-bottom: 80px; }
    .form-lead { font-family: 'Open Sans', sans-serif; color: #777; font-style: italic; margin-bottom: 5px; font-weight: 300; }
    .form-title { font-family: 'Cormorant Garamond', serif; font-size: 3rem; color: #547c6a; margin-bottom: 30px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-family: 'Open Sans', sans-serif; font-weight: 600; color: #333; margin-bottom: 8px; font-size: 0.9rem; }
    .form-group input, .form-group textarea { width: 100%; padding: 15px 20px; border: 1px solid #ddd; border-radius: 12px; font-family: 'Open Sans', sans-serif; background-color: #fcfcfc; }
    .btn-submit { width: 100%; background-color: #547c6a; color: white; padding: 18px; border: none; border-radius: 50px; font-family: 'Open Sans', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer; margin-top: 10px; transition: background 0.3s; }
    .btn-submit:hover { background-color: #436354; }
    .side-img { width: 100%; border-radius: 40px; box-shadow: 20px 20px 0px #f0f0f0; }

    .footer-section {
      background-color: #547c6a;
      padding: 60px 0;
      color: white;
      border-top-left-radius: 40px; 
      border-top-right-radius: 40px;
    }
    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start; 
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 40px;
    }
    .white-logo {
      width: 45px;
      filter: brightness(0) invert(1); /* Transforma qualquer logo colorido em branco */
    }
    .footer-logo-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
    .footer-info {
      font-family: 'Open Sans', sans-serif;
    }
    .footer-phone {
      font-size: 0.9rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  `]
})
export class ContactComponent {
  testimonials = [
    { name: 'Márcia Silva', photo: 'https://i.pravatar.cc/150?u=marcia', text: 'Esta aula suave utiliza posturas no chão e alongamentos longos para dissolver a tensão acumulada no corpo.' },
    { name: 'Ingrid Fonseca', photo: 'https://i.pravatar.cc/150?u=ingrid', text: 'A Taíse é uma profissional maravilhosa! Suas aulas me trouxeram muita consciência corporal e ajudaram a aliviar minhas dores nas costas.' },
    { name: 'Manoela Dias', photo: 'https://i.pravatar.cc/150?u=manoela', text: 'O momento da aula se tornou a melhor parte da minha semana. Excelente didática e uma energia muito boa que ajuda a acalmar a mente.' }
  ];

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}