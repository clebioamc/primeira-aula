import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { AsideComponent } from '../../../components/aside/aside.component';
import { MainComponent } from '../../../components/main/main.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, AsideComponent, AsideComponent, MainComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
