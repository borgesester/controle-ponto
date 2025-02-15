import { Component } from "@angular/core";

@Component({
    template: `
        <h2>Controle de ponto - Admin</h2>
        <router-outlet></router-outlet>
    `,
    host: { 'hostID': crypto.randomUUID().toString() }
    
})

export class AdminComponent {

}