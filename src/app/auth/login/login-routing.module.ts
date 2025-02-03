import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogonComponent } from "./components/logon.component";
import { LoginComponent } from "./components/login";

export const loginRoutes: Routes = [
    {
        path: 'login',
        component: LogonComponent,
        children: [
            {path: '', component: LoginComponent}]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes),
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
