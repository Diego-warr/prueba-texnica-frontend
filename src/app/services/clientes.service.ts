import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ResponseDTO} from "../dto/ResponseDTO";
import {ClienteDTO} from "../dto/ClienteDTO";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private endpointAllClientes = `${environment.HOST}/cliente-query/all-clientes`;

  constructor(private http: HttpClient) {

  }

  public getAll(){
    return this.http.get<ResponseDTO<ClienteDTO[]>>(`${this.endpointAllClientes}`,{})
  }
}
