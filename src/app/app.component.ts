import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'node:process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // This should be an array
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  mystyles= {
    title: 'project5',
    name: 'srujana',
    reg: '221801340015',
    domain: 'software technology'
  };
  a=10;
  b=20;
  items=[
    {
      nam:'sruju',
      regn:'221801340015',
    },
    {
      nam:'harshi',
      regn:'221801340015'
    }
  ]
  userRole:string='1'
}

