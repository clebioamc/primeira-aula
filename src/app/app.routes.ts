import { Routes } from '@angular/router';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { ContatoMainComponent } from './pages/contato/contato-main/contato-main.component';
import { PrincipalComponent } from './pages/pages/principal/principal.component';

export const routes: Routes = [
    { path:'', component: PrincipalComponent },
    {path:'contato', component: ContatoMainComponent},
    { path:'principal', component: PrincipalComponent },
    { path: 'alunos', component: AlunosComponent }
];



