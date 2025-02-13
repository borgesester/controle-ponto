import { Component } from "@angular/core";

@Component({
    template: `
        <h2>Cadastro de Pessoa Jurídica</h2>
        <router-outlet></router-outlet>
    `,
    host: {'collision-id': 'registerPjComponent'},
})

export class RegistrationPjComponent {

}