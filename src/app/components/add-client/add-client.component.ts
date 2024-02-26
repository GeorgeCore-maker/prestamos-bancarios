import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  userForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required],
      loanDetails: this.formBuilder.group({
      loanAmount: ['', Validators.required],
      repaymentDate: ['']
      })
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value); // Aquí puedes enviar el formulario al servidor u otro proceso
    } else {
      console.error('Formulario inválido');
    }
  }

  onSubmit() {
    // Lógica para manejar la presentación del formulario aquí
  }
}


