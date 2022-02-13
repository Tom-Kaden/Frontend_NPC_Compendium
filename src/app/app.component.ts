import { Component } from '@angular/core';
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularclient';

  constructor() {
    this.title = 'NPC Compendium';
  }
}
