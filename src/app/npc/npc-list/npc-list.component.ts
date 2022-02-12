import { Component, OnInit } from '@angular/core';
import {Npc} from "../npc";
import {NpcService} from "../../service/npc.service";

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit {

  npcs: Npc[] | undefined;

  constructor(private npcService: NpcService) {
  }

  ngOnInit(): void {
    this.npcService.findAll().subscribe(data => {
      this.npcs = data;
    })
  }
}
