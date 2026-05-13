import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio.html', // Caminho do HTML
  styleUrls: ['./bio.scss'] // Caminho do SCSS
  
})
export class BioComponent {}