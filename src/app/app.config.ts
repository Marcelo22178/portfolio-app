import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({ // ✅ Habilita View Transitions API
        skipInitialTransition: true,
        onViewTransitionCreated: (transitionInfo) => {
          console.log('View Transition started:', transitionInfo);
        }
      })
    ),
    provideAnimations()
  ]
};