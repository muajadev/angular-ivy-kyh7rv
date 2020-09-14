import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RolModel } from './componentes/modelo/rol.model';
import { RolService } from './componentes/servicios/rol.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RolModel ],
  declarations: [ AppComponent, HelloComponent, RolService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
