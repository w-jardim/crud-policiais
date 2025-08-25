import { Routes } from '@angular/router';
import { CadastroPoliciaisComponent } from './pages/cadastro-policiais.component';
import { ListaPoliciaisComponent } from './pages/lista-policiais.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'policiais', pathMatch: 'full' },
	{ path: 'policiais', component: ListaPoliciaisComponent },
	{ path: 'cadastro', component: CadastroPoliciaisComponent },
	{ path: 'cadastro/:id', component: CadastroPoliciaisComponent },
	{ path: '**', redirectTo: 'policiais' }
];
