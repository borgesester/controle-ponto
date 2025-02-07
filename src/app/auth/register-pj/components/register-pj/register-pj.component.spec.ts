import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPjComponent } from './register-pj.component';

describe('RegisterPjComponent', () => {
  let component: RegisterPjComponent;
  let fixture: ComponentFixture<RegisterPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPjComponent]
    });
    fixture = TestBed.createComponent(RegisterPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
