import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { ConverterComponent } from './components/converter/converter.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    ConverterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ConverterComponent
  ]
})
export class CoreModule {
}
