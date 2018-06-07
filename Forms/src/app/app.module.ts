import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ModeldrivenFormComponent } from './modeldriven-form/modeldriven-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ModeldrivenFormComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
