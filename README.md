# PrestamosBancarios

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) versión 11.2.19.

## Development server

Ejecutar en la consola `ng serve` para el servidor de desarrollo. Esto lo lleva a la ruta `http://localhost:4200/](http://localhost:4200/dashboard/start)`. La app se recargará cuando haga algún cambio en algún archivo.

debe ejecutar en la consola el comando `npm run backend`, este comando está configurado para ejecutar el backend de la aplicación.

## modo de ejecución
IMPORTANTE: para que el programa se ejecute debe estar corriendo la versión 11.2.19 de Angular-cli y la versión 10.13.0 de NodeJS

La app esta desarrollada para que automáticamente dirija al usuario al componente Start, allí se puede ver el navbar que tiene los botones respectivos para la navegación y la card donde está el dinero actual del banco, estos 2 componentes están siempre visibles para todas las vistas; se renderiza la tabla de "Clientes Aprobados" que muestra los clientes cuyas solicitudes sean aprobadas aleatoriamente.

luego está la pestaña para agregar clientes, en donde se podrán registrar nuevos usuarios, allí todos los campos son requeridos y deben estar en el formato adecuado, el monto del préstamo debe estar entre $100000 y $5000000, sino el programa mostrara una advertencia.

por último, la pestaña de lista de clientes, donde se muestran todos los clientes, este o no aprobado el crédito.

