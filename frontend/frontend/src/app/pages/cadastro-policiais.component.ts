import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PoliciaisService } from '../services/policiais.service';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-policiais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './cadastro-policiais.component.html',
  styleUrl: './cadastro-policiais.component.scss'
})
export class CadastroPoliciaisComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private policiaisService: PoliciaisService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      rg_civil: ['', [Validators.required]],
      rg_militar: ['', [Validators.required]],
      cpf: ['', [Validators.required, this.cpfValido]],
      data_nascimento: ['', [Validators.required]],
      matricula: ['', [Validators.required]]
    });
  }

  cpfValido(control: any) {
    return cpfValidator.isValid(control.value) ? null : { cpfInvalido: true };
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.policiaisService.cadastrarPolicial(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Policial cadastrado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/policiais']);
      },
      error: (err) => {
        this.snackBar.open(err, 'Fechar', { duration: 4000 });
        this.loading = false;
      }
    });
  }
}
