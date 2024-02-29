import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export function asyncValidator(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
    // Simulación de una solicitud HTTP asincrónica
    setTimeout(() => {
      if (control.value === 'valor_invalido') {
        resolve({ asyncError: true }); // Devuelve un objeto de error asincrónico si el valor es inválido
      } else {
        resolve(null); // Devuelve null si el valor es válido
      }
    }, 2000); // Simula una demora de 2 segundos
  });
}
