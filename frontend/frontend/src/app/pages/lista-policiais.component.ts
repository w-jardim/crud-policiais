import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciaisService, Policial } from '../services/policiais.service';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-policiais',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './lista-policiais.component.html',
  styleUrl: './lista-policiais.component.scss'
})
export class ListaPoliciaisComponent implements OnInit {
  policiais: Policial[] = [];
  filtrados: Policial[] = [];
  displayedColumns = ['rg_civil', 'rg_militar', 'cpf', 'data_nascimento'];
  filtroCpf = new FormControl('');
  filtroRg = new FormControl('');
  loading = false;

  constructor(private policiaisService: PoliciaisService) {}

  ngOnInit() {
    this.carregar();
    this.filtroCpf.valueChanges.subscribe(() => this.filtrar());
    this.filtroRg.valueChanges.subscribe(() => this.filtrar());
  }

  carregar() {
    this.loading = true;
    this.policiaisService.listarPoliciais().subscribe({
      next: (dados) => {
        this.policiais = dados;
        this.filtrar();
        this.loading = false;
      },
      error: () => {
        this.policiais = [];
        this.filtrados = [];
        this.loading = false;
      }
    });
  }

  filtrar() {
    let lista = this.policiais;
    const cpf = this.filtroCpf.value?.trim();
    const rg = this.filtroRg.value?.trim();
    if (cpf) lista = lista.filter(p => p.cpf.includes(cpf));
    if (rg) lista = lista.filter(p => p.rg_civil.includes(rg) || p.rg_militar.includes(rg));
    this.filtrados = lista;
  }
}
