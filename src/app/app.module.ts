import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { ApiModule } from './api/api.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './apiInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api/services';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

// registers the Api INterceptor for inyectin the OAuth Token
export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    ApiModule.forRoot({ rootUrl: 'https://api.spotify.com/v1' }),
    NgxGraphModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [ApiService, ApiInterceptor, API_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
