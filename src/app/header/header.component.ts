import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isDarkTheme = false;
  isScrolled = false;

  navItems = [
    { path: '/about', label: 'Acerca de Mí', icon: 'fas fa-user' },
    { path: '/skills', label: 'Habilidades', icon: 'fas fa-code' },
    { path: '/projects', label: 'Proyectos', icon: 'fas fa-briefcase' },
    { path: '/contact', label: 'Contacto', icon: 'fas fa-envelope' }
  ];

  ngOnInit() {
    this.checkScroll();
    // Cargar tema guardado si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    
    // Guardar preferencia
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}