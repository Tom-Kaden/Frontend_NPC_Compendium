import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpcListComponent } from './npc-list/npc-list.component';
import { NpcFormComponent } from './npc-form/npc-form/npc-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NpcService} from "./service/npc.service";

@NgModule({
  declarations: [
    AppComponent,
    NpcListComponent,
    NpcFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
