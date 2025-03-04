import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent, ListComponent, RegisterComponent } from "./components";
import { AdminGuardService } from "./services";

export const adminRoutes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuardService],
        children: [
            {
                path: '',
                component: ListComponent 
            },
            {
                path: 'cadastro',
                component: RegisterComponent
            },
            {
                path: 'atualizacao/:lancamentoId',
                component: RegisterComponent
            }

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}