import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { PainelComponent } from '../painel/painel.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FormularioComponent, PainelComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  input: string = 'algum valor aleatório';

  receberValor(resultado : string){
    console.log(resultado);
  }

}
