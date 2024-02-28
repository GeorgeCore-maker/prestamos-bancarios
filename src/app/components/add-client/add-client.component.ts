import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/domain/services/dataService';
import { Client } from 'src/app/domain/models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  userForm!: FormGroup;
  minimo: number = this.dataService.minimo; // Definir el monto mínimo del préstamo
  maximo: number = this.dataService.maximo; // Definir el monto máximo del préstamo

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      identification: new FormControl('', Validators.required),
      /* loanAmount: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.min(this.minimo),
          Validators.max(this.maximo),
        ])
      ), */
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const client: Client = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        identification: this.userForm.value.identification,
      };

      this.dataService.addClient(client).subscribe(
        (response) => {
          alert('Se almaceno correctamente el cliente ' + response.name);
          this.onClear();
        },
        (error) => {
          console.error('Error al enviar el cliente:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  private onClear(): void {
    this.userForm.value.name = '';
    this.userForm.value.email = '';
    this.userForm.value.identification = '';
  }
}
