import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmployeeComponent } from "./components";
import { EntryComponent } from "./components/entry";
import { ListComponent } from "./components/list";

export const employeeRoutes = [
    {
        path: 'funcionario',
        component: EmployeeComponent,
        children: [
            {
                path: '',
                component: EntryComponent
            },
            {
                path: 'listagem',
                component: ListComponent
            }

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(employeeRoutes),
    ],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {
}