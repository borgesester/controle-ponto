import { Component } from "@angular/core";

@Component({
    template: `
        <div class="content">
            <h2>Cadastro de Pessoa Jurídica</h2>
            <router-outlet></router-outlet>
        </div>
        
    `,
    host: {'collision-id': 'registerPjComponent'},
})

export class RegistrationPjComponent {

}