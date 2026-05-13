import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss'],
})
export class CadastroComponent {}