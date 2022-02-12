import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NpcListComponent} from "./npc/npc-list/npc-list.component";
import {NpcFormComponent} from "./npc/npc-form/npc-form.component";

const routes: Routes = [
  { path: 'npcs', component: NpcListComponent },
  { path: 'addnpc', component: NpcFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
