import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
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