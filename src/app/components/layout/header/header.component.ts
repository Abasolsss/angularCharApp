import { Component } from '@angular/core';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  testFunc = (): void => {
    console.log('Hello World');
  };
}
