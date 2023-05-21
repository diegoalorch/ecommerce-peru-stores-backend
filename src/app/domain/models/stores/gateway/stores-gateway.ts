import { Observable } from 'rxjs';
import { StoresModel } from '../model/stores-model';

export abstract class StoresGateway {
  abstract getAllStoresGateway(): Observable<StoresModel>;
}
