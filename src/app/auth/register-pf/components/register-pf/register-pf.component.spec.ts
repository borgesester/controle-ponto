import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPfComponent } from './register-pf.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterUserModule } from 'src/app/components/register-user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterPfComponent', () => {
  let component: RegisterPfComponent;
  let fixture: ComponentFixture<RegisterPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPfComponent],
      imports: [
        MatSnackBarModule,
        RouterTestingModule,
        HttpClientTestingModule,
        RegisterUserModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(RegisterPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
