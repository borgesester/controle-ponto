import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Directive({
  selector: '[mask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MaskDirective,
      multi: true
    }
  ]
})

export class MaskDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  @Input('mask') mask: string;
  constructor(private el: ElementRef) { }

  writeValue(value: any): void {
    if (value) {
      this.el.nativeElement.value = value
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {    
    const value = $event.target.value.replace(/\D/g, '');

    //retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(value);
      return;
    }

    let pad = this.mask.replace(/\D/g, '').replace(/0/g, '_');    

    if (value.length <= pad.length) {
      this.onChange(value);
    }

    $event.target.value = this.applyMask(value);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.mask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  applyMask(value: string): string {
    value = value.replace(/\D/g, '');
    let pad = this.mask.replace(/\D/g, '').replace(/0/g, '_');
    let valueMask = value + pad.substring(0, pad.length - value.length);
    let valueMaskPos = 0;

    value = '';

    for (let i = 0; i < this.mask.length; i++) {
      if (isNaN(parseInt(this.mask.charAt(i)))) {
        value += this.mask.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substring(0, value.indexOf('_'));
    }

    return value
  }

}
