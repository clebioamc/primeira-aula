import { Component } from '@angular/core';
import { Requisicao } from '../../models/RequisicaoModel';
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

  input: Requisicao | undefined;

  receberValor(resultado: Requisicao){

    this.input = resultado;
    console.log(resultado);
  }

}
