import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterPjComponent, RegistrationPjComponent } from "./components";

export const registerPjRoutes: Routes = [
    {
        path: 'cadastro-pj',
        component: RegistrationPjComponent,
        children: [
            {path: '', component: RegisterPjComponent}]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(registerPjRoutes),
    ],
    exports: [RouterModule]
})
export class RegisterPjRoutingModule {
}
