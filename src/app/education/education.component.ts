import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationList = [
  { title: 'Máster universitario en Desarrollo de Sitios y Aplicaciones Web', institution: 'Universitat Oberta de Catalunya', period: '2022 - 2024' },
  { title: 'Asian Studies Program', institution: 'Kansai Gaidai University (Japón)', period: '2019 - 2020' },
  { title: 'Graduado en Estudios de Asia Oriental - Especialidad en Japonés', institution: 'Universitat Autònoma de Barcelona', period: '2016-2021' },
  { title: 'Técnico en Sistemas microinformáticos y redes', institution: 'Institut Obert de Catalunya', period: '2013-2015' },
  ];
}
