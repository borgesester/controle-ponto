import { Component } from "@angular/core";

@Component({
    template: `
        <div class="content-admin">
            <h2>Controle de ponto - Admin</h2>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./admin.component.scss'],
    host: { 'hostID': crypto.randomUUID().toString() }
    
})

export class AdminComponent {

}