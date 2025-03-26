import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class LanguagesComponent {
  displayedColumns: string[] = ['language', 'certification', 'score', 'level'];
  languages = [
    {
      language: 'Español',
      certification: null,
      score: null,
      level: 'Nativo'
    },
    {
      language: 'Catalán',
      certification: null,
      score: null,
      level: 'Nativo'
    },
    {
      language: 'Inglés',
      certification: {
        name: 'IELTS',
        logo: 'ielts-logo.png',
        link: 'https://www.ielts.org/'
      },
      score: '8.0',
      level: 'C1'
    },
    {
      language: 'Japonés',
      certification: {
        name: 'JLPT',
        logo: 'jlpt-logo.webp',
        link: 'https://www.jlpt.es/Inicio.sca?id=1'
      },
      score: 'N2',
      level: 'C1'
    },
  ];
}
