import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import {EnNumPipe, FaNumPipe, IRCurrencyPipe, NationalCodePipe} from 'ngx-persian';
import { ValidatorFunctionsComponent } from './validator-functions/validator-functions.component';

@NgModule({
  declarations: [
    AppComponent,
    EnNumPipe,
    FaNumPipe,
    IRCurrencyPipe,
    NationalCodePipe,
    PipesTestComponent,
    ValidatorFunctionsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
