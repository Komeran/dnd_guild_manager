import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import * as config from '../../assets/config.json';
import {Player} from '../player';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    let url = config.backend.url + config.backend.players.subdirectory + config.backend.players.get;
    return this.http.get(url);
  }

  parsePlayers(data:Array<any>) {
    let players = new Array<Player>();
    for(let p of data) {
      let player = new Player(p["p_username"], p["p_firstname"], p["p_lastname"], p["p_phone"], p["p_email"], p["p_discordid"], p["p_id"]);
      players.push(player);
    }
    return players;
  }

  updatePlayer(player:Player) {
    let url = config.backend.url + config.backend.players.subdirectory + config.backend.players.update;
    return this.http.post<Player>(url, player, httpOptions);
  }

  addPlayer(player:Player) {
    let url = config.backend.url + config.backend.players.subdirectory + config.backend.players.add;
    return this.http.post<Player>(url, player, httpOptions);
  }
}
