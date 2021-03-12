import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { ValidatorFunctionsComponent } from './validator-functions/validator-functions.component';
import {NgxPersianModule} from 'ngx-persian';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    ValidatorFunctionsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPersianModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
