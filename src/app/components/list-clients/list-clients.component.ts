import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/domain/services/dataService';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getClients().subscribe(response => {
      console.log(response)
    }, error => {})
  }

}
