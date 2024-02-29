import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/domain/services/dataService';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  userForm!: FormGroup;
  minimo: number = this.dataService.minimo; // Definir el monto mínimo del préstamo
  maximo: number = this.dataService.maximo; // Definir el monto máximo del préstamo

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required],
    });
  }

  ngOnInit(): void {
/*     this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      identification: new FormControl('', Validators.required),
    }); */
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const cliente = this.userForm.value;
      this.dataService.saveClient(cliente).subscribe(
        response => {
          console.log('Cliente guardado exitosamente:', response);

          this.onClear();
        },
        error => {
          console.error('Error al guardar el cliente:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      );
    } else {
      console.error('El formulario no es válido. Por favor, complete todos los campos correctamente.');
      // Aquí puedes manejar la validación del formulario, como mostrar un mensaje al usuario
    }
  }

  private onClear(): void {
    this.userForm.value.name = '';
    this.userForm.value.email = '';
    this.userForm.value.identification = '';
  }
}
