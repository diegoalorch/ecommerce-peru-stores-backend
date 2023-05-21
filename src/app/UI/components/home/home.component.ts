import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresData } from 'src/app/domain/models/stores/model/stores-model';
import { StoresUsecase } from 'src/app/domain/usecases/stores/stores-usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stores: StoresData[] = [];
  // imgArray = Array(5);

  constructor(
    private router: Router,
    private _getStoresUseCase: StoresUsecase
  ) {}

  ngOnInit(): void {
    this.getAllStores();
    this.clearUrl();
  }

  clearUrl() {
    window.history.replaceState(null, '', '/');
  }

  getAllStores() {
    this._getStoresUseCase.getAllStoresUseCase().subscribe((data) => {
      this.stores = data.data;
      console.log(this.stores);
    });
  }

  loginPages() {
    this.router.navigate(['/create-account']);
  }

  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  getStarImage(rating: number, calificacion: number): string {
    console.log(rating + ' ' + calificacion);
    if (rating < calificacion) {
      return '../../../../assets/image/recommend/estrella_recomend.png';
    } else {
      return '../../../../assets/image/recommend/estrella_sin_recomend.png';
    }
  }
}
