import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideAnimations(), // ✅ Esto provee las animaciones globalmente
    ...(appConfig.providers || [])
    // otros providers que necesites...
  ]
})
  .catch((err) => console.error(err));