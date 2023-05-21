import { NgModule } from '@angular/core';

// IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// DECLARATIONS
import { AppComponent } from './app.component';

// PROVIDERS
import { providersGatewayDelay } from './utils/providers-gateway-delay';
import { HomeComponent } from './UI/components/home/home.component';
import { AuthComponent } from './UI/components/auth/auth.component';
import { StoresComponent } from './UI/components/stores/stores.component';
import { LoadingPageComponent } from './UI/components/loading-page/loading-page.component';

// BOOTSTRAP

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    StoresComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  providers: providersGatewayDelay,
  bootstrap: [AppComponent],
})
export class AppModule { }
