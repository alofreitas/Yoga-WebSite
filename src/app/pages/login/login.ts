import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="login-wrapper">
      <a routerLink="/" class="btn-back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Voltar
      </a>

      <div class="glass-card">
        <div class="toggle-container">
          <div class="toggle-bg">
            <button class="toggle-btn active">Login</button>
            <button class="toggle-btn" routerLink="/cadastro">Cadastro</button>
          </div>
        </div>

        <h2 class="login-title">QUE BOM TE VER!</h2>
        <p class="login-subtitle">Entre com o e-mail e senha cadastrados.</p>

        <form class="login-form">
          <div class="input-group">
            <input type="email" placeholder="Email" class="glass-input">
          </div>
          <div class="input-group">
            <input type="password" placeholder="Senha" class="glass-input">
          </div>
          <div class="forgot-pwd"><a href="#">Esqueceu a senha?</a></div>
          <div class="divider"><span>ou</span></div>
          <div class="social-buttons">
            <button type="button" class="btn-social">Apple</button>
            <button type="button" class="btn-social">Google</button>
          </div>
          <button type="submit" class="btn-continuar">Continuar</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login-wrapper { min-height: 100vh; background-image: url('/assets/images/Plano de fundo.png'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: flex-end; padding: 0 10%; position: relative; }
    .btn-back { position: absolute; top: 40px; left: 40px; color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; font-family: 'Open Sans'; font-weight: 600; }
    .glass-card { width: 100%; max-width: 480px; background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 40px; padding: 50px 40px; }
    .toggle-bg { background: white; border-radius: 50px; display: flex; padding: 5px; width: 80%; margin: 0 auto; }
    .toggle-btn { flex: 1; padding: 10px; border: none; background: transparent; border-radius: 50px; font-family: 'Open Sans'; font-weight: 600; color: #777; cursor: pointer; }
    .toggle-btn.active { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); color: #333; }
    .login-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #333; text-align: center; margin-bottom: 10px; }
    .login-subtitle { font-family: 'Open Sans'; font-size: 0.85rem; color: #555; text-align: center; margin-bottom: 40px; }
    .glass-input { width: 100%; padding: 18px 20px; border: none; border-radius: 15px; background: rgba(255, 255, 255, 0.8); margin-bottom: 15px; box-sizing: border-box; }
    .divider { text-align: center; margin: 20px 0; color: #555; position: relative; }
    .social-buttons { display: flex; gap: 10px; margin-bottom: 20px; }
    .btn-social { flex: 1; padding: 12px; border-radius: 10px; border: 1px solid #ddd; background: white; cursor: pointer; }
    .btn-continuar { width: 100%; padding: 18px; border: none; border-radius: 50px; background-color: #547c6a; color: white; font-weight: 600; cursor: pointer; }
  `]
})
export class LoginComponent {}