export class Cliente{
    id: number=0;
    nombre :string | undefined
    apellido :string | undefined
    edad? :number
    cuit :string | undefined
    isLive : boolean = false

    otracosa? : otracosa
    constructor(){
        this.nombre = "-"
    }
}

export class otracosa{
    id:number=0
}