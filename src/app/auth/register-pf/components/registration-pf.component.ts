import { Component } from "@angular/core";

@Component({
    template: `
        <div class="content">
            <h2>Cadastro de Pessoa Física</h2>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./registration-pf.component.scss'],
    host: {'collision-id': 'registerPfComponent'},
})

export class RegistrationPfComponent {

}