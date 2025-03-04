import { Component } from "@angular/core";

@Component({
    template: `
        <div class="content-employee">
            <h2>Controle de ponto</h2>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
}
