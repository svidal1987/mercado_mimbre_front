import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../model/cliente';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [NzButtonModule,NzIconModule,NzTableModule,NzFormModule,FormsModule,NzInputModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  params:any
  paginate:any
  data:any
  constructor(private service: ClientesService){


    this.params = {
      "page":0,"perPage":5,
      "filter":{},
      "sort":{"_id": "desc"}
    } 
    this.search()
  }

  search(){
    this.service.getClientes(this.params).subscribe(
      (data)=>{
        console.log(data)
        if(data.data){
          this.data = data.data
          this.paginate = data
        }
        
      },(err)=>{
        console.log(err)
      },console.info) 
  }
}
