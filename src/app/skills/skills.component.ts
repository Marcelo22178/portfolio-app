import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

// ============================================================================
// INTERFACES
// ============================================================================

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'cloud' | 'tools';
export type SkillLevel = 'advanced' | 'intermediate' | 'basic';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: SkillLevel;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface ChartData {
  name: string;
  value: number;
}

// ============================================================================
// CONSTANTES DE CONFIGURACIÓN
// ============================================================================

const SKILLS_DATA: Skill[] = [
  // ==================== FRONTEND ====================
  { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'RxJS', icon: 'devicon-reactivex-plain colored', category: 'frontend', level: 'intermediate' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', category: 'frontend', level: 'advanced' },
  { name: 'SASS/SCSS', icon: 'devicon-sass-plain colored', category: 'frontend', level: 'intermediate' },

  // ==================== BACKEND ====================
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'backend', level: 'advanced' },
  { name: 'NestJS', icon: 'devicon-nestjs-plain colored', category: 'backend', level: 'advanced' },
  { name: 'Express', icon: 'devicon-express-original colored', category: 'backend', level: 'advanced' },
  { name: 'REST APIs', icon: 'devicon-apache-plain colored', category: 'backend', level: 'advanced' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain colored', category: 'backend', level: 'basic' },
  { name: 'TypeORM', icon: 'devicon-typescript-plain colored', category: 'backend', level: 'advanced' },
  { name: 'JWT', icon: 'devicon-json-plain colored', category: 'backend', level: 'intermediate' },
  { name: 'Socket.io', icon: 'devicon-socketio-plain colored', category: 'backend', level: 'basic' },
  { name: 'PM2', icon: 'devicon-amazonwebservices-plain colored', category: 'backend', level: 'advanced' },

  // ==================== DATABASES ====================
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'database', level: 'advanced' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'database', level: 'advanced' },
  { name: 'Oracle', icon: 'devicon-oracle-plain colored', category: 'database', level: 'advanced' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'database', level: 'basic' },
  { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored', category: 'database', level: 'basic' },

  // ==================== CLOUD & DEVOPS ====================
  { name: 'GCP', icon: 'devicon-googlecloud-plain colored', category: 'cloud', level: 'intermediate' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops', level: 'intermediate' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored', category: 'cloud', level: 'basic' },
  { name: 'Azure', icon: 'devicon-azure-plain colored', category: 'cloud', level: 'basic' },
  { name: 'CI/CD', icon: 'devicon-jenkins-plain colored', category: 'devops', level: 'intermediate' },
  { name: 'Nginx', icon: 'devicon-nginx-plain colored', category: 'devops', level: 'intermediate' },
  { name: 'SSL/TLS', icon: 'devicon-apache-plain colored', category: 'devops', level: 'advanced' },

  // ==================== HERRAMIENTAS & OTROS ====================
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools', level: 'advanced' },
  { name: 'GitHub', icon: 'devicon-github-plain colored', category: 'tools', level: 'advanced' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain colored', category: 'tools', level: 'intermediate' },
  { name: 'Linux', icon: 'devicon-linux-plain colored', category: 'tools', level: 'intermediate' },
  { name: 'Power Automate', icon: 'devicon-microsoft-plain colored', category: 'tools', level: 'intermediate' },
  { name: 'Webpack', icon: 'devicon-webpack-plain colored', category: 'tools', level: 'intermediate' },
  { name: 'npm/yarn', icon: 'devicon-npm-original-wordmark colored', category: 'tools', level: 'intermediate' },
  { name: 'Postman', icon: 'devicon-postman-plain colored', category: 'tools', level: 'advanced' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'tools', level: 'advanced' },
  { name: 'Jira', icon: 'devicon-jira-plain colored', category: 'tools', level: 'basic' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'tools', level: 'basic' }
];

const COLOR_SCHEME: Color = {
  name: 'professionalScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#1976d2', '#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#28a745']
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('stagger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  
  // ==========================================================================
  // PROPIEDADES PÚBLICAS
  // ==========================================================================
  
  /** Lista de habilidades técnicas */
  public skills: Skill[] = [];
  
  /** Lista de usuarios desde API */
  public users: User[] = [];
  
  /** Datos para el gráfico */
  public chartData: ChartData[] = [];
  
  /** Esquema de colores para gráficos */
  public colorScheme: Color = COLOR_SCHEME;
  
  /** Estado de carga */
  public isLoading: boolean = false;
  
  /** Categorías de habilidades */
  public skillCategories: Record<SkillCategory, string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    database: 'Databases',
    devops: 'DevOps & Infrastructure',
    cloud: 'Cloud Platforms',
    tools: 'Tools & Others'
  };

  /** Filtro actual */
  public currentFilter: SkillCategory | 'all' = 'all';

  // ==========================================================================
  // LIFECYCLE HOOKS
  // ==========================================================================

  ngOnInit(): void {
    this.initializeSkills();
    this.initializeChart();
  }

  // ==========================================================================
  // MÉTODOS PÚBLICOS
  // ==========================================================================

  /**
   * Simula la obtención de usuarios desde una API
   */
  public fetchUsers(): void {
    this.isLoading = true;
    
    // Simular delay de API
    setTimeout(() => {
      this.users = [
        { id: 1, name: 'Juan Perez', email: 'juan@mail.com', role: 'Developer' },
        { id: 2, name: 'Maria Lopez', email: 'maria@mail.com', role: 'Designer' },
        { id: 3, name: 'Carlos Soto', email: 'carlos@mail.com', role: 'Manager' }
      ];
      
      this.updateChartData();
      this.isLoading = false;
    }, 1000);
  }

  /**
   * Filtra habilidades por categoría
   */
  public getSkillsByCategory(category: SkillCategory): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  /**
   * Obtiene todas las categorías únicas
   */
  public getCategories(): SkillCategory[] {
    return ['frontend', 'backend', 'database', 'devops', 'cloud', 'tools'];
  }

  /**
   * Filtra skills por categoría
   */
  public filterSkills(category: SkillCategory | 'all'): void {
    this.currentFilter = category;
  }

  /**
   * Obtiene skills filtradas
   */
  public getFilteredSkills(): Skill[] {
    if (this.currentFilter === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.currentFilter);
  }

  /**
   * Obtiene el nombre de la categoría para mostrar
   */
  public getCategoryName(category: SkillCategory | 'all'): string {
    if (category === 'all') {
      return 'Todas las Skills';
    }
    return this.skillCategories[category];
  }

  /**
   * Obtiene el color del nivel de habilidad
   */
  public getLevelColor(level: SkillLevel): string {
    const colors = {
      advanced: '#28a745',
      intermediate: '#ffc107',
      basic: '#6c757d'
    };
    return colors[level];
  }

  /**
   * Obtiene el texto del nivel de habilidad
   */
  public getLevelText(level: SkillLevel): string {
    const texts = {
      advanced: 'Avanzado',
      intermediate: 'Intermedio',
      basic: 'Básico'
    };
    return texts[level];
  }

  // ==========================================================================
  // MÉTODOS PRIVADOS
  // ==========================================================================

  /**
   * Inicializa la lista de habilidades
   */
  private initializeSkills(): void {
    this.skills = SKILLS_DATA;
  }

  /**
   * Inicializa los datos del gráfico
   */
  private initializeChart(): void {
    this.chartData = [
      { name: 'Usuarios Activos', value: 0 },
      { name: 'Nuevos Registros', value: 0 }
    ];
  }

  /**
   * Actualiza los datos del gráfico basado en los usuarios
   */
  private updateChartData(): void {
    this.chartData = [
      { name: 'Total Usuarios', value: this.users.length },
      { name: 'Desarrolladores', value: this.users.filter(u => u.role === 'Developer').length },
      { name: 'Diseñadores', value: this.users.filter(u => u.role === 'Designer').length },
      { name: 'Gestores', value: this.users.filter(u => u.role === 'Manager').length }
    ];
  }
}