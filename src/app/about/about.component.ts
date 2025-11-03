import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Sobre Mí';
  description = `
    Soy Marcelo Hurtado, Desarrollador Full Stack con experiencia en la creación de aplicaciones web escalables 
    utilizando Angular, Node.js, NestJS y bases de datos relacionales. Me especializo en el desarrollo backend 
    y la implementación de APIs seguras y optimizadas, así como en la gestión de entornos Linux para despliegue 
    con PM2 y certificados SSL.
  `;

  experiences: Experience[] = [
    {
      title: 'Analista de Sistema de Gestión Estratégica',
      company: 'Universidad de Talca',
      period: 'Nov 2022 - Actualidad',
      description: [
        'Desarrollo y mantención de sistemas internos con Node.js, Express, TypeORM y Angular.',
        'Implementación de APIs REST y módulos integrados con sistemas legados.',
        'Configuración de entornos Linux con PM2 y certificados SSL.',
        'Participación en planificación y rediseño de arquitectura de aplicaciones.'
      ]
    },
    {
      title: 'Desarrollador Web',
      company: 'Universidad de Talca',
      period: 'Ene 2022 - Mar 2022',
      description: [
        'Desarrollo de módulos PHP (CodeIgniter) y MySQL.',
        'Implementación de plataforma de reportes para gestión universitaria.',
        'Integración con sistemas internos de la universidad.'
      ]
    }
  ];

  skills = [
    'Angular', 'Node.js', 'NestJS', 'Express', 'TypeORM',
    'MySQL', 'PostgreSQL', 'Linux', 'PM2', 'SSL', 'Power Automate'
  ];

  contact = {
    email: 'marcelo22178@gmail.com',
    phone: '+56 9 4483 9065',
    linkedin: 'https://linkedin.com/in/marcelo-hurtadomorales-aaab48238'
  };
}
