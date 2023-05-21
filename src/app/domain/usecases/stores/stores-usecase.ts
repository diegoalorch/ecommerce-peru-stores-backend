import { Observable } from "rxjs";
import { StoresGateway } from "../../models/stores/gateway/stores-gateway";
import { StoresModel } from "../../models/stores/model/stores-model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class StoresUsecase {
  constructor(private _storesGateway: StoresGateway) { }

  getAllStoresUseCase(): Observable<StoresModel> {
    return this._storesGateway.getAllStoresGateway();
  }
}
