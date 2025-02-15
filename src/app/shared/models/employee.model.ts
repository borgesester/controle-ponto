import { Entry } from "./entry.model";

export class Employee {
    constructor(
        public nome: string,
        public email: string,
        public cpf: string,
        public perfil: string,
        public valorHoras?: string,
        public qtdHorasTrabalhoDia?: string,
        public qtdHorasAlmoco?: string,
        public lancamentos?: Entry[],
        public id?: string
    ) {}
}