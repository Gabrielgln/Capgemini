import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  //lista de celulares!
  celulares: Celular[] = [
    {id: 1,nome: "Celular XL",descricao: "Um celular grande",esgotado: false},
    {id: 2,nome: "Celular A2",esgotado: false},
    {id: 3,nome: "Celular G7",descricao: "Um celular pequeno",esgotado: true}
  ]
}
