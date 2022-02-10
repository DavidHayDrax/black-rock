export class CreateTareaDTO {
    readonly name: string;
    readonly description: string;
    readonly fechaDeInicio: string;
    readonly fechaDeTermino: string;
    readonly activo: boolean;
}