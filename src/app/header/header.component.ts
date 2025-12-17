import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll smooth et centré
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Ajouter un highlight temporaire
      section.classList.add('highlight-section');
      setTimeout(() => section.classList.remove('highlight-section'), 1500);
    }
  }

}


