import { Injectable } from '@angular/core';
import  { Cliente, otracosa } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes():Cliente[]{
    return [
      {
        apellido:"Apellido",
        cuit:"CUIT",
        id:123,
        isLive:true,
        nombre:"Nombre",
        edad:34
      },
      
      {
        apellido:"Apellido",
        cuit:"CUIT",
        id:124,
        isLive:true,
        nombre:"Nombre",
        edad:34
      },
      {
        apellido:"Apellido",
        cuit:"CUIT",
        id:125,
        isLive:false,
        nombre:"Nombre",
        edad:34
      },
    ]
  }
}
