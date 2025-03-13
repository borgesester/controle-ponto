import { inject, TestBed } from '@angular/core/testing';
import { MaskDirective } from './mask.directive';
import { ElementRef } from '@angular/core';

const mockElementRef: any = {
  nativeElement: {
  }
};

describe('MaskDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: mockElementRef
        }
      ]
    }).compileComponents();
  })

  it('should create an instance', inject([ElementRef], (elementRef: ElementRef) => {
    const directive = new MaskDirective(elementRef);
    expect(directive).toBeTruthy();
  }));
});
