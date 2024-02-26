import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css']
})
export class LoanAmountComponent implements OnInit {

  minimo: number = 100000; // Definir el monto mínimo del préstamo
  maximo: number = 5000000; // Definir el monto máximo del préstamo
  montoSolicitado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
