import { Component } from "@angular/core";

@Component({
    template: `
        <h2>Cadastro de Pessoa Física</h2>
        <router-outlet></router-outlet>
    `,
    host: {'collision-id': 'registerPfComponent'},
})

export class RegistrationPfComponent {

}