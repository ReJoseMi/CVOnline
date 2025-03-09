import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workList = [
    {
      position: 'Coordinador de espacios y eventos culturales',
      company: 'Sagrada Familia - Audioguiarte',
      period: '2021 - Presente',
      description: '...'
    },
    {
      position: 'ERP SAGE Stock Manager',
      company: 'Barça Licencing Management',
      period: '2021',
      description: ''
    },
    {
      position: 'Project Assistant',
      company: 'Espai Travinae',
      period: '2020 - 2021',
      description: ''
    },
    {
      position: 'Administrativo',
      company: 'SOPHOS Barberà',
      period: '2013-2018',
      description: ''
    },
  ];
}
