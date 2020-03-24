import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormComponent } from './form/form.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes =[
  { path: '', redirectTo: '/inicio', pathMatch: 'full'  },
  { path: 'inicio', component: InicioComponent  },
  { path: 'consulta', component: ConsultasComponent },
  { path: 'lista/form', component: FormComponent },
  { path: 'lista/form/:id', component: FormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormComponent,
    ConsultasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
