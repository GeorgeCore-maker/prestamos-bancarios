import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private totalAmountSubject = new BehaviorSubject<number>(1000000000); // Valor inicial del banco
  totalAmount$ = this.totalAmountSubject.asObservable();
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de clientes y actualizar el totalAmount
  updateTotalAmount(): void {
    this.http.get<any[]>(`${this.apiUrl}/clients`).pipe(
      map(clients => {
        // Filtrar los clientes cuyo préstamo ha sido aprobado
        let approvedLoans = clients.filter(client => client.approved);
        // Sumar los montos de préstamo aprobados
        let totalApprovedLoanAmount = approvedLoans.reduce((acc, client) => acc + parseFloat(client.amount.loanAmount), 0);
        // Restar esta cantidad del totalAmount
        let currentTotalAmount = this.totalAmountSubject.getValue();
        let newTotalAmount = Math.max(0, currentTotalAmount - totalApprovedLoanAmount); // Asegurar que el totalAmount no sea negativo
        // Actualizar el totalAmount
        this.totalAmountSubject.next(newTotalAmount);
      })
    ).subscribe(
      () => console.log('Monto total actualizado exitosamente.'),
      error => console.error('Error actualizando el monto total:', error)
    );
  }
}
