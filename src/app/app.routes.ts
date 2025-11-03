import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/about', 
    pathMatch: 'full' 
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: { 
      animation: 'aboutPage',
      state: 'about'
    }
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    data: { 
      animation: 'contactPage',
      state: 'contact'
    }
  },
  { 
    path: 'projects', 
    component: ProjectsComponent,
    data: { 
      animation: 'projectsPage',
      state: 'projects'
    }
  },
  { 
    path: 'skills', 
    component: SkillsComponent,
    data: { 
      animation: 'skillsPage',
      state: 'skills'
    }
  },
  { 
    path: '**', 
    redirectTo: '/about' 
  }
];