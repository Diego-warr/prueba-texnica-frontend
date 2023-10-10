import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ResponseDTO} from "../dto/ResponseDTO";
import {VentaDTO} from "../dto/VentaDTO";

@Injectable({
  providedIn: 'root'
})
export class VentasService {


  private endpointAllVentas = `${environment.HOST}/venta-query/fecha`;

  constructor(private http: HttpClient) {


  }


  public ventaByFecha(fecha: string){
    return this.http.get<ResponseDTO<VentaDTO[]>>(`${this.endpointAllVentas}?fecha=`+`${fecha}`)
  }
}
