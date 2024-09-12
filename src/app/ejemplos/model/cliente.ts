export class Cliente{
    _id?: number
    firtname?: string
    lastname?: string
}
export class PaginaCliente{
    page?: number
    data?: Cliente[]
    total?: number
    perPage?: number
    totalPage?: number
    
}
