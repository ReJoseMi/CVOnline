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
  { title: 'Máster universitario en Desarrollo de Sitios y Aplicaciones Web',
    institution: 'Universitat Oberta de Catalunya',
    period: '2022 - 2024',
    url: 'https://www.uoc.edu/es/estudios/masters/master-universitario-desarrollo-sitios-aplicaciones-web' },
  { title: 'Asian Studies Program',
    institution: 'Kansai Gaidai University (Japón)',
    period: '2019 - 2020',
    url: 'https://www.kansaigaidai.ac.jp/asp/' },
  { title: 'Graduado en Estudios de Asia Oriental - Especialidad en Japonés',
    institution: 'Universitat Autònoma de Barcelona',
    period: '2016-2021',
    url: 'https://www.uab.cat/web/estudiar/listado-de-grados/informacion-general/estudios-de-asia-oriental-1216708258897.htmlhttps://www.uab.cat/web/estudiar/listado-de-grados/informacion-general/estudios-de-asia-oriental-1216708258897.html?param1=1223967776732' },
  { title: 'Técnico en Sistemas microinformáticos y redes', institution: 'Institut Obert de Catalunya', period: '2013-2015', url: 'https://54.195.129.38/educacio/es/fp-smx-es' },
  ];
}
