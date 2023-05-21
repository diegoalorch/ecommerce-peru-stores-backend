import { Component } from '@angular/core';
import { LoadingPageService } from 'src/app/infraestructure/services/loading-page/loading-page.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
})
export class LoadingPageComponent {
  showLoader = false;

  constructor(private loaderService: LoadingPageService) {}

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: boolean) => {
      this.showLoader = state;
    });
  }
}
