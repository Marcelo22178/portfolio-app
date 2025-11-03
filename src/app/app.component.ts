import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { trigger, transition, style, query, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header como componente separado -->
    <app-header></app-header>

    <!-- Contenido principal con animaciones -->
    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent
  ],
  animations: [
    trigger('routeAnimations', [
      // Transición entre cualquier página
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh',
            opacity: 0
          })
        ], { optional: true }),
        
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)'
          })
        ], { optional: true }),
        
        group([
          query(':leave', [
            animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', 
              style({ 
                opacity: 0,
                transform: 'translateY(-30px) scale(0.98)'
              }))
          ], { optional: true }),
          
          query(':enter', [
            animate('600ms 100ms cubic-bezier(0.4, 0.0, 0.2, 1)', 
              style({ 
                opacity: 1,
                transform: 'translateY(0) scale(1)'
              }))
          ], { optional: true })
        ])
      ]),

      // Transición específica para About (entrada desde izquierda)
      transition('* => aboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh'
          })
        ], { optional: true }),
        
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'translateX(-100px)'
          })
        ], { optional: true }),
        
        query(':leave', [
          style({ opacity: 1 }),
          animate('300ms ease-out', 
            style({ opacity: 0 }))
        ], { optional: true }),
        
        query(':enter', [
          animate('500ms 200ms ease-out', 
            style({ 
              opacity: 1,
              transform: 'translateX(0)'
            }))
        ], { optional: true })
      ]),

      // Transición específica para Skills (entrada desde derecha)
      transition('* => skillsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh'
          })
        ], { optional: true }),
        
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'translateX(100px)'
          })
        ], { optional: true }),
        
        query(':leave', [
          style({ opacity: 1 }),
          animate('300ms ease-out', 
            style({ opacity: 0 }))
        ], { optional: true }),
        
        query(':enter', [
          animate('500ms 200ms ease-out', 
            style({ 
              opacity: 1,
              transform: 'translateX(0)'
            }))
        ], { optional: true })
      ]),

      // Transición específica para Projects (entrada desde abajo con fade)
      transition('* => projectsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh'
          })
        ], { optional: true }),
        
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'translateY(50px) scale(0.95)'
          })
        ], { optional: true }),
        
        query(':leave', [
          animate('300ms ease-out', 
            style({ opacity: 0 }))
        ], { optional: true }),
        
        query(':enter', [
          animate('600ms 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
            style({ 
              opacity: 1,
              transform: 'translateY(0) scale(1)'
            }))
        ], { optional: true })
      ]),

      // Transición específica para Contact (entrada con zoom)
      transition('* => contactPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100vh'
          })
        ], { optional: true }),
        
        query(':enter', [
          style({ 
            opacity: 0,
            transform: 'scale(0.8) rotate(-5deg)'
          })
        ], { optional: true }),
        
        query(':leave', [
          animate('250ms ease-in', 
            style({ opacity: 0 }))
        ], { optional: true }),
        
        query(':enter', [
          animate('500ms 100ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
            style({ 
              opacity: 1,
              transform: 'scale(1) rotate(0deg)'
            }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  /**
   * Prepara la ruta para las animaciones
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || 'none';
  }
}