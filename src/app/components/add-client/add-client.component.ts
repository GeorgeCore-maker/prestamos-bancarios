import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/domain/services/dataService';
import { asyncValidator } from '../../shared/custom-validators';
import { Client } from 'src/app/domain/models/client';
import { LoanAmountComponent } from '../loan-amount/loan-amount.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  @ViewChild(LoanAmountComponent)
  loanAmountComponent!: LoanAmountComponent;
  userForm: FormGroup;
  minimo: number = this.dataService.minimo; // Definir el monto mínimo del préstamo
  maximo: number = this.dataService.maximo; // Definir el monto máximo del préstamo

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required, asyncValidator],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  handleLoanFormChange(loanForm: FormGroup) {
    console.log(loanForm.value);
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      let client: Client = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        identification: this.userForm.value.identification,
        dateCredit: new Date().toISOString().slice(0, 10), // Formato: 'YYYY-MM-DD',
        approved: Math.random() < 0.5,
        amount: this.loanAmountComponent.amountForm.value
      };
      this.dataService.saveClient(client).subscribe(
        (response) => {
          console.log('Cliente guardado exitosamente:', response);
          this.mostrarMensaje('Cliente guardado exitosamente');
          this.onClear();
        },
        (error) => {
          console.error('Error al guardar el cliente:', error);
          this.mostrarMensaje('Error al guardar el cliente');
        }
      );
    } else {
      console.error(
        'El formulario no es válido. Por favor, complete todos los campos correctamente.'
      );
      this.mostrarMensaje(
        'El formulario no es válido. Por favor, complete todos los campos correctamente.'
      );
    }
  }

  private onClear(): void {
    this.userForm.value.name = '';
    this.userForm.value.email = '';
    this.userForm.value.identification = '';
  }

  private mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración del snackbar en milisegundos
    });
  }
}
