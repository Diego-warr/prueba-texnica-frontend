import {Component, OnInit} from '@angular/core';
import {SortEvent} from "primeng/api";
import {ClientesService} from "../../services/clientes.service";
import {VentasService} from "../../services/ventas.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {Timestamp} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {VentaDTO} from "../../dto/VentaDTO";


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],

})
export class VentasComponent implements OnInit{
  date: string;

  ventas : VentaDTO[]

  displayedColumns: string[] = ['Cliente', 'Fecha', 'Total', 'Ver detalle'];

  constructor(
    private clienteService : ClientesService,
    private ventaService : VentasService,
    private datePipe: DatePipe) {

    this.date=""
    this.ventas=[]
  }

  ngOnInit() {

  }

  onSelectedDate(event : any){

    let fecha = event.target.value
    console.log(fecha)
    this.date = fecha
    if(this.date!=null){
      let fechaQuery = this.datePipe.transform(fecha,"yyyy-MM-dd");
      console.log(fechaQuery)
    }
  }


  getAllClientes(){

    console.log(this.date)
    this.clienteService.getAll().subscribe(
      data=>{
        console.log(data.data)
      },
      error=>{

      }
    )
  }

  getVentasByFecha(){
    this.getAllClientes()
    this.ventaService.ventaByFecha(this.date).subscribe(
      data=>{
        console.log(data.data)
      },
      error=>{

    }
    )
  }


}
