import { Component, OnInit } from '@angular/core';
import {Npc} from "../npc";
import {NpcService} from "../../service/npc.service";
import {ModalComponent} from "../../modal/modal.component";

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit {

  npcs: Npc[] | undefined;

  constructor(/*private modalComponent: ModalComponent,*/ private npcService: NpcService) {
  }

  ngOnInit(): void {
    this.npcService.findAll().subscribe(data => {
      this.npcs = data;
    })
  }

  openNpc() {
    // this.modalComponent.open();
  }

  deleteNpc(npc: Npc) {
    this.npcService.delete(npc);
  }

  editNpc(id: string) {

  }
}
