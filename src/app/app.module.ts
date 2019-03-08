import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfviewComponent } from './pdfview/pdfview.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PdfpriyankaComponent } from './pdfpriyanka/pdfpriyanka.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfviewComponent,
    PdfpriyankaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: PdfviewComponent, pathMatch: 'full'},
      {path: 'letterhead', component: PdfpriyankaComponent, pathMatch: 'full'},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '*', component: PdfviewComponent},
      { path: '**', component: PdfviewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
