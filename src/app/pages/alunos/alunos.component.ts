import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {


  pupils: any = [
    { id: 1, name: 'John', age: 19 },
    { id: 2, name: 'Mary', age: 16 },
    { id: 3, name: 'Jane', age: 17 },
    { id: 4, name: 'Henry', age: 18 },
    { id: 5, name: 'Sean', age: 20 },
    { id: 6, name: 'Joseph', age: 21 },
    { id: 7, name: 'Anne', age: 15 }
  ]

}
