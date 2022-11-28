import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public Titulo:string = "Angular Interpolacio"
public image:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Barbados_beach.jpg/250px-Barbados_beach.jpg"
}
