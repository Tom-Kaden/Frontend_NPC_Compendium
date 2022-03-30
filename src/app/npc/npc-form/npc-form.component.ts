import {Component, OnInit} from '@angular/core';
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

  base64Array: Uint8Array[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private npcService: NpcService) {
    this.npc = new Npc();
  }

  onSubmit() {
    this.npc.picture = this.base64Array;
    console.log("NPC Form Submit:");
    console.log(this.npc);
    this.npcService.save(this.npc).subscribe(result => this.goToNpcList());
  }

  goToNpcList() {
    this.router.navigate(['/npcs']);
  }

  ngOnInit(): void {
  }

  convertImageToBase64(event:any) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      let reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(readerEvent:any) {
    // var binaryString = readerEvent.target.result.replace("data:", "").replace(/^.+,/, "");
    this.base64Array = readerEvent.target.result.replace("data:", "").replace(/^.+,/, "");
    console.log("base64 String: " + this.base64Array);
  }
}
