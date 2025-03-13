import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPjComponent } from './register-pj.component';
import { RegisterUserModule } from 'src/app/components/register-user';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterPjComponent', () => {
  let component: RegisterPjComponent;
  let fixture: ComponentFixture<RegisterPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPjComponent],
      imports: [
        RegisterUserModule,
        MatSnackBarModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(RegisterPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
