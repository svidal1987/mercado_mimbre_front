import { Injectable } from '@angular/core';
import  { Cliente, PaginaCliente } from '../model/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(public httpClient : HttpClient) { }

  getClientes(params:any) : Observable<PaginaCliente> {

    console.log(environment.ejemplo_backend+"/api/user")
    return this.httpClient.get(environment.ejemplo_backend+"/api/user", {headers: new HttpHeaders()
      //.set('authorization',"bearer "+this.jwt)
      .set('params',JSON.stringify(params))
      })
  }
}
