import {ClienteDTO} from "./ClienteDTO";
import {DetalleVentaDTO} from "./DetalleVentaDTO";

export interface VentaDTO{
  id : number;
  clieenteId : ClienteDTO;
  fecha : Date;
  detalles : DetalleVentaDTO[]
}
