import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/domain/services/dataService';
import { Client } from '../../domain/models/client';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  dataSource: MatTableDataSource<Client> | undefined = undefined; // Inicializa dataSource como undefined
  clients: Client[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getApprovedClients().subscribe(
      clients => {
        this.clients = clients;
      },
      error => {
        console.error('Error al recuperar clientes aprobados:', error);
      }
    );
  }
}
