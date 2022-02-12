import { Component, OnInit } from '@angular/core';
import {Npc} from "../npc";
import {ActivatedRoute, Router} from "@angular/router";
import {NpcService} from "../../service/npc.service";

@Component({
  selector: 'app-npc-form',
  templateUrl: './npc-form.component.html',
  styleUrls: ['./npc-form.component.scss']
})
export class NpcFormComponent implements OnInit {

  npc: Npc;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private npcService: NpcService) {
    this.npc = new Npc();
  }

  onSubmit() {
    this.npcService.save(this.npc).subscribe(result => this.goToNpcList());
  }

  goToNpcList() {
    this.router.navigate(['/npcs']);
  }

  ngOnInit(): void {
  }

}
