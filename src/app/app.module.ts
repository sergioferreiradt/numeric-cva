import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumericFieldComponent } from './numeric-field/numeric-field.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PercentageFieldComponent } from './form/percentage-field/percentage-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericFieldComponent,
    PercentageFieldComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
