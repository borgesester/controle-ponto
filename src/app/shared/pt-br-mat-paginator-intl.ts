import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()

export class PtBrMatPaginatorIntl extends MatPaginatorIntl {
    override itemsPerPageLabel: string = 'Qtd. por página';
    override nextPageLabel: string = 'Próximo';
    override previousPageLabel: string = 'Anterior';

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if(length === 0 || pageSize === 0) {
            return '0 de '+ length
        }
        length = Math.max(0, length);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? 
            Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex}/${length}`
    };
}