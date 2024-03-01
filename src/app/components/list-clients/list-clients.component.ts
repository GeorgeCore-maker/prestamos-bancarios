import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/domain/services/dataService';
import { Client } from 'src/app/domain/models/client';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = [];
  dataSource: MatTableDataSource<Client> | undefined = undefined; // Inicializa dataSource como undefined

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAllClients();
  }

  loadAllClients() {
    this.dataService.getClients().subscribe((clients) => {
      this.dataSource = new MatTableDataSource(clients);
    });
  }

  onDeleteClient(id: number): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.deleteClient(id).subscribe(
          () => {
            // Lógica para actualizar la lista de clientes después de eliminar
          },
          (error) => {
            console.error('Error al eliminar el cliente:', error);
            // Lógica para manejar errores
          }
        );
      }
    });
  }
}
