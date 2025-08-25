import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

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
export class CadastroPoliciaisComponent implements OnInit {
  form: FormGroup;
  loading = false;
  editId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private policiaisService: PoliciaisService,
    private snackBar: MatSnackBar,
    private router: Router
  , private route: ActivatedRoute
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
    const payload = this.form.value;
    if (this.editId) {
      this.policiaisService.atualizarPolicial(this.editId, payload).subscribe({
        next: () => {
          this.snackBar.open('Policial atualizado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/policiais']);
        },
        error: (err) => {
          this.snackBar.open(err, 'Fechar', { duration: 4000 });
          this.loading = false;
        }
      });
    } else {
      this.policiaisService.cadastrarPolicial(payload).subscribe({
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

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('id');
  console.log('[Cadastro] param id=', id);
      if (id) {
        this.editId = Number(id);
        this.loading = true;
        this.policiaisService.obterPolicial(this.editId).subscribe({
            next: (p) => {
      console.log('[Cadastro] obterPolicial resposta:', p);
              // popular form (formatar data para yyyy-MM-dd)
              const nascimentoIso = p.data_nascimento ? new Date(p.data_nascimento).toISOString().slice(0,10) : '';
              // Evitar mostrar hash da matrícula (se aparentar ser hash, limpar)
              const matriculaVal = p.matricula && String(p.matricula).length < 30 ? p.matricula : '';
              this.form.patchValue({
                rg_civil: p.rg_civil,
                rg_militar: p.rg_militar,
                cpf: p.cpf,
                data_nascimento: nascimentoIso,
                matricula: matriculaVal
              });
            this.loading = false;
          },
          error: (err) => {
            console.error('[Cadastro] erro ao obter policial', err);
            this.snackBar.open(err, 'Fechar', { duration: 4000 });
            this.loading = false;
          }
        });
      }
    });
  }
}
