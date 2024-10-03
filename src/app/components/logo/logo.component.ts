import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMVcickE9d0vSRIeVqz4jvBaafNPiM3-siw&s";
}
