import { Component } from "@angular/core";

@Component({
    template: `
        <div class="content">
            <h2>Controle de ponto - Admin</h2>
            <router-outlet></router-outlet>
        </div>
    `,
    host: { 'hostID': 'admin-component'
    }
    
})

export class AdminComponent {
    
    
}