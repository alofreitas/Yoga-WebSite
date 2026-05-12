import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container header-container">
        
        <div class="logo">
          <img src="assets/icons/Logo Taíse.png" alt="Logo" class="logo-icon">
          <span class="logo-text">TAÍSE YOGA</span>
        </div>
        
        <nav class="nav-menu">
          <div class="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <a href="#">Calendário</a>
          </div>
          <div class="nav-buttons">
            <button class="btn-outline" routerLink="/cadastro">Cadastro</button>
            <button class="btn-solid" routerLink="/login">Login</button>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header { width: 100%; padding: 20px 0; background-color: #fafafa; }
    .header-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    
    /* ESTILOS DA LOGO */
    .logo { display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 80px; height: auto;} 
    .logo-text { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: #547c6a; letter-spacing: 2px; font-weight: 300; }
    
    .nav-menu { display: flex; align-items: center; gap: 60px; border: 1px solid #557A66; border-radius: 30px; padding: 0px 0px 0px 100px; height: 40px; }
    .nav-links { display: flex; gap: 100px; }
    .nav-links a { text-decoration: none; color: #557A66; font-family: 'Open Sans', sans-serif; font-size: 0.9rem; font-weight: 300; }
    .nav-buttons { display: flex; gap: 10px; }
    .btn-outline, .btn-solid { padding: 12px 50px; border-radius: 30px; font-family: 'Open Sans', sans-serif; cursor: pointer; border: none; font-weight: 300;}
    //.btn-outline { background: transparent; color: #547c6a; }
    .btn-solid, .btn-outline { background-color: #547c6a; color: white; }
  `]
})
export class HeaderComponent {}