import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/domain/services/dataService';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {

  totalAmount: number = this.dataService.total;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  approveCredit(amount: number): void {
    this.totalAmount -= amount;
  }

  rejectCredit(): void {
    // Lógica para rechazar un crédito si es necesario
  }

}
