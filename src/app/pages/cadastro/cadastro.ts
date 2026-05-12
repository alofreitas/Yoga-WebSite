import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="login-wrapper">
      
      <a routerLink="/login" class="btn-back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Login
      </a>

      <div class="glass-card">
        
        <div class="toggle-container">
          <div class="toggle-bg">
            <button class="toggle-btn" routerLink="/login">Login</button>
            <button class="toggle-btn active">Cadastro</button>
          </div>
        </div>

        <h2 class="login-title">BEM VINDO!</h2>
        <p class="login-subtitle">Preencha com os seus dados para finalizar o cadastro.</p>

        <form class="login-form">
          <div class="input-group">
            <input type="text" placeholder="Nome" class="glass-input">
          </div>

          <div class="input-group">
            <input type="email" placeholder="Email" class="glass-input">
          </div>
          
          <div class="input-group">
            <input type="password" placeholder="Senha" class="glass-input">
            <span class="icon-eye">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </span>
          </div>

          <div class="input-group">
            <input type="password" placeholder="Confirmar Senha" class="glass-input">
            <span class="icon-eye">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </span>
          </div>

          <div class="divider"><span>ou cadastre-se com</span></div>

          <div class="social-buttons">
            <button type="button" class="btn-social">
              <i class="fa-brands fa-apple"></i> Apple
            </button>
            <button type="button" class="btn-social">
              <i class="fa-brands fa-google"></i> Google
            </button>
          </div>

          <button type="submit" class="btn-continuar">Continuar</button>
        </form>

      </div>
    </div>
  `,
  styles: [`
    .login-wrapper {
      min-height: 100vh;
      background-image: url('/assets/images/Plano de fundo.png');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10%;
      position: relative;
    }
    
    .btn-back {
      position: absolute; top: 40px; left: 40px;
      color: white; text-decoration: none; display: flex; align-items: center; gap: 8px;
      font-family: 'Open Sans', sans-serif; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .glass-card {
      width: 100%;
      max-width: 480px;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 40px;
      padding: 40px;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    }

    .toggle-container { display: flex; justify-content: center; margin-bottom: 25px; }
    .toggle-bg { background: rgba(255,255,255,0.4); border-radius: 50px; display: flex; padding: 5px; width: 100%; }
    .toggle-btn { flex: 1; padding: 12px; border: none; background: transparent; border-radius: 50px; font-family: 'Open Sans'; font-weight: 600; color: #444; cursor: pointer; }
    .toggle-btn.active { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); color: #333; }

    .login-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #333; text-align: center; margin-bottom: 5px; }
    .login-subtitle { font-family: 'Open Sans', sans-serif; font-size: 0.8rem; color: #555; text-align: center; margin-bottom: 30px; }

    .input-group { position: relative; margin-bottom: 15px; }
    .glass-input {
      width: 100%; padding: 16px 20px; border: none; border-radius: 15px;
      background: rgba(255, 255, 255, 0.8); font-family: 'Open Sans', sans-serif; font-size: 0.95rem; color: #333;
      box-sizing: border-box;
    }
    .icon-eye { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); cursor: pointer; }

    .divider { text-align: center; margin: 25px 0; position: relative; }
    .divider::before, .divider::after { content: ''; position: absolute; top: 50%; width: 25%; height: 1px; background: rgba(0,0,0,0.1); }
    .divider::before { left: 0; }
    .divider::after { right: 0; }
    .divider span { font-family: 'Open Sans'; font-size: 0.8rem; color: #555; background: transparent; padding: 0 10px; }

    .social-buttons { display: flex; gap: 15px; margin-bottom: 30px; }
    .btn-social { flex: 1; padding: 12px; border: 1px solid rgba(255,255,255,0.4); border-radius: 15px; background: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; gap: 10px; font-family: 'Open Sans'; font-weight: 600; cursor: pointer; }

    .btn-continuar { width: 100%; padding: 18px; border: none; border-radius: 50px; background-color: #547c6a; color: white; font-family: 'Open Sans'; font-weight: 600; font-size: 1.1rem; cursor: pointer; }
  `]
})
export class CadastroComponent {}