import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterPfComponent, RegistrationPfComponent } from "./components";

export const registerPjRoutes: Routes = [
    {
        path: 'cadastro-pf',
        component: RegistrationPfComponent,
        children: [
            {path: '', component: RegisterPfComponent}]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(registerPjRoutes),
    ],
    exports: [RouterModule]
})
export class RegisterPfRoutingModule {
}
