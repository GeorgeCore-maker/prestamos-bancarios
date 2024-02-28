import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/domain/services/dataService';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css']
})
export class LoanAmountComponent implements OnInit {
  amountForm!: FormGroup;
  minimo: number = this.dataService.minimo; // Definir el monto mínimo del préstamo
  maximo: number = this.dataService.maximo; // Definir el monto máximo del préstamo
  montoSolicitado: number = 0;
  
 // static this: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.amountForm = new FormGroup({
      loanAmount: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.min(this.minimo),
          Validators.max(this.maximo),
        ])
      )
  })
  }


  onChangeEvent(event: any){
    console.log(event.target.value);
    this.montoSolicitado = event.target.value;
    let message:String  ="";
    if(this.montoSolicitado < this.minimo){
      message = "el monto solicitado es menor al minimo";
    }

    if(this.montoSolicitado > this.maximo){
      message = "el monto solicitado es mayor al maximo";
    }

    if(message != ""){
      alert(message);
      return;
    }

    this.saveCredit()
  }

  private saveCredit(){

  }

}
