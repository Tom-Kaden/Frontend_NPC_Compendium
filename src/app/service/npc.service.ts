import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Npc} from "../npc/npc";

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  private npcsUrl: string;

  constructor(private http: HttpClient) {
    this.npcsUrl = 'http://localhost:8080/npcs';
  }

  public findAll(): Observable<Npc[]> {
    return this.http.get<Npc[]>(this.npcsUrl);
  }

  public save(npc: Npc) {
    console.log("NPC Service Send:");
    console.log(npc);
    // TODO: 30.03.2022 Image isnt sent correctly, but the other values are
    return this.http.post(this.npcsUrl, npc);
  }

  public delete(npc: Npc) {
    return this.http.delete(this.npcsUrl + "/" + npc.id).subscribe();
  }
}
