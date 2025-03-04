import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './directives/mask.directive';
import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';
import { TypePipe } from './pipes/type.pipe';
import { DateBrPipe } from './pipes/date-br.pipe';


@NgModule({
  declarations: [
    MaskDirective,
    TypePipe,
    DateBrPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaskDirective,
    TypePipe,
    DateBrPipe
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
