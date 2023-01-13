import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome1 = "";
  urlImagem = "/assets/f-joao-gomes.jpg";
  nome = "gabriel";
  dataNascimento = "2000-01-01";

  mostrarDataNascimento(){
    alert("A data de nascimento do João é: " +this.dataNascimento);
  }

  
  
  

}
