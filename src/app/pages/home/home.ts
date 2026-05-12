import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../sections/header/header';
import { HeroComponent } from '../../sections/hero/hero';
import { FeaturesComponent } from '../../sections/features/features';
import { BioComponent } from '../../sections/bio/bio';
import { PricingComponent } from '../../sections/pricing/pricing';
import { ContactComponent } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    BioComponent,
    PricingComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-bio></app-bio>
      <app-pricing></app-pricing>
      <app-contact></app-contact>
    </main>
  `
})
export class HomeComponent {}