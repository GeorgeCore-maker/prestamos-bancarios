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
