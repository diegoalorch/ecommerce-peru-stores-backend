import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  activeForm: number = 1;
  activeStore: Boolean = false;

  ngOnInit(): void {
    this.toggleForm(1); // Establecer el formulario activo inicialmente en 1
  }

  toggleForm(formNumber: number) {
    this.activeForm = formNumber;
  }

  activeCreateStore() {
    this.activeStore = true;
  }

  desactiveCreateStore() {
    this.activeStore = false;
  }
}
