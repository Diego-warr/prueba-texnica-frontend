export class ResponseDTO<T>{
  data: T | undefined;
  message: String = "";
  details: String = "";
  apiVersion: String = "";
}
