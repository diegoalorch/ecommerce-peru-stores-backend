export class StoresModel {
  status!: boolean;
  resp!: string;
  message!: string;
  data!: StoresData[];
}

export class StoresData {
  nameStore!: string;
  routeStore!: string;
  imageStore!: string;
  logoStore!: string;
  loginFunds!: LoginFunds[];
  urlQrCatalogStore!: string;
  urlQrStore!: string;
  categoriesStores!: CatogoryStore[];
  colorsStores!: any;
  classifications!: Classifications[];
  classificationTotal!: number;
  recommendations!: number;
  minimuAmount!: number;
  status!: boolean;
}

export class LoginFunds {
  _id!: string;
  urlImageFunds!: string;
  status!: boolean;
}

export class CatogoryStore {
  _id!: string;
  categoyStoreId!: string;
  nameCategoryStore!: string;
}

export class Classifications {
  _id!: string;
  classification!: string;
  reason!: string;
}
