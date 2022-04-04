import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
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
    return this.http.post(this.npcsUrl, npc)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
    }));
  }

  public delete(npc: Npc) {
    return this.http.delete(this.npcsUrl + "/" + npc.id).subscribe();
  }
}
