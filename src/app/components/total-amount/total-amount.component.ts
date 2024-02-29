import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/domain/services/bank-service';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.bankService.totalAmount$.subscribe(
      totalAmount => this.totalAmount = totalAmount,
      error => console.error('Error getting total amount:', error)
    );

    // Actualizar el totalAmount
    this.bankService.updateTotalAmount();
  }
}
