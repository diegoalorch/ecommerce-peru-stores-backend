import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoresGateway } from 'src/app/domain/models/stores/gateway/stores-gateway';
import { Observable } from 'rxjs';
import { StoresModel } from 'src/app/domain/models/stores/model/stores-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StoresDelayService extends StoresGateway {
  private _peruStoreUrlApi = environment.url;

  private rutaStore = "stores";

  constructor(private http: HttpClient) {
    super();
  }

  // NOTA
  // LAS FUNCIONES DECLARADAS AQUI TIENEN QUE TENER EL MISMO NOMBRE QUE EN EL GATEWAY

  getAllStoresGateway(): Observable<StoresModel> {
    return this.http.get<StoresModel>(this._peruStoreUrlApi + this.rutaStore + "/");
  }
}
