import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { HttpUtilService } from "src/app/shared";

@Injectable()

export class AdminGuardService {
    constructor(
        private httpUtil: HttpUtilService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if(this.httpUtil.getProfile() === 'ROLE_ADMIN') {
            return true
        }
        this.router.navigate(['/funcionario'])
        return false;
    }



}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AdminGuardService).canActivate();
  }