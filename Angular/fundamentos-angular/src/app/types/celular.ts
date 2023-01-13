export interface Celular{
    id: number;
    nome: String;
    descricao?: String; // ?: - quer dizer que é opcional
    esgotado: boolean;
}