import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Requisicao } from '../../models/RequisicaoModel';
import { MusicService } from '../../services/music-service.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  constructor(private service: MusicService) {}

  banda: string = '';
  musica: string = '';

  mensagem: Requisicao = {
    banda: '',
    musica: '',
    letra: '',
  };
  @Output() emissor = new EventEmitter<Requisicao>();

  selecionarBanda() {
    this.mensagem.banda = this.banda;
    this.mensagem.musica = this.musica;
    this.emissor.emit(this.mensagem);

    this.service.getLetraMusica(this.banda, this.musica).subscribe({
      next: (res) => {
        this.mensagem.letra = res.lyrics;

        console.log(res.lyrics);
      },
      error: (err) => console.log(err),
    });
  }
}
