import { Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../model/cliente';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [NzButtonModule,NzIconModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  clientes:Cliente[]=[]
  constructor(service: ClientesService){
    this.clientes = service.getClientes()


    let cliente = new Cliente()
    console.log(cliente)
  }
}
