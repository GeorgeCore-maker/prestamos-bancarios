import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { DataService } from 'src/app/domain/services/dataService';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css'],
})
export class LoanAmountComponent {
  @Output() formValueChanged = new EventEmitter<FormGroup>();
  amountForm: FormGroup;
  minimo: number = this.dataService.minimo; // Definir el monto mínimo del préstamo
  maximo: number = this.dataService.maximo; // Definir el monto máximo del préstamo
  montoSolicitado: number = 0;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.amountForm = this.formBuilder.group({
      loanAmount: [
        '',
        [
          Validators.required,
          Validators.min(this.minimo),
          Validators.max(this.maximo),
        ],
      ],
    });

    // Escuchar cambios en el formulario y emitir el evento
    this.amountForm.valueChanges.subscribe(() => {
      this.formValueChanged.emit(this.amountForm);
    });
  }

  onChangeEvent(event: any) {
    this.montoSolicitado = event.target.value;
    let message: string = '';

    if (this.montoSolicitado < this.minimo) {
      message = 'El monto solicitado es menor al mínimo';
    }

    if (this.montoSolicitado > this.maximo) {
      message = 'El monto solicitado es mayor al máximo';
    }

    if (message !== '') {
      alert(message);
    }
  }
}
