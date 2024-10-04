import { Routes } from '@angular/router';
import { AlunosComponent } from './pages/pages/alunos/alunos.component';
import { PrincipalComponent } from './pages/pages/principal/principal.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path:'', component: PrincipalComponent },
    { path:'principal', component: PrincipalComponent },
    { path: 'alunos', component: AlunosComponent }
];



