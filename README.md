# SpotiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Renovación token (Postman)

## Postman

Para poder renovar el token debeis realizar un post a esta dirección:
https://accounts.spotify.com/api/token
```
Y pasarle por el Body:
KEY:  grant_type  /   VALUE: client_credentials
KEY:  client_id   /   VALUE: 5473e5cb73164fb8983d39a00f6e692a
KEY:  client_secret / VALUE: d8b1842a2a0347868a1c2419932d79ce
```
Con esto os deberia generar el token.


En el archivo `spotify.service.ts` dentro de `src/app/services`
En la linea 21:
```
getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDn4Tx9dcZ4y_u7oht1EG37LgYHu8mS23a72e8mKjvtzv7Y6Sa2PqkvJvjUsPTS0q5FkTNeYs81e0wojj0'
    });
```
Reemplazais el nuevo por el caducado y la app comenzará a funcionar.
