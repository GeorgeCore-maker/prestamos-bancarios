import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      identification: new FormControl('', Validators.required),
      loanAmount:new FormControl('', Validators.required)
    });
  }


  onSubmit() {
    // Lógica para manejar la presentación del formulario aquí
    if (this.userForm.valid) {
      console.log(this.userForm.value); // Aquí puedes enviar el formulario al servidor u otro proceso
    } else {
      console.error('Formulario inválido');
    }
  }
}


