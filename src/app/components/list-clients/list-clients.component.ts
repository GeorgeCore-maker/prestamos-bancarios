import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/domain/services/dataService';
import { Client } from 'src/app/domain/models/client';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})
export class ListClientsComponent implements OnInit {
  dataSource: MatTableDataSource<Client> | undefined = undefined; // Inicializa dataSource como undefined

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getClients().subscribe(clients => {
      this.dataSource = new MatTableDataSource(clients);
    });
  }
}
