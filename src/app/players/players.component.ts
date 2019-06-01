import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playerService:PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data:Array<Player>) => {
      this.players = this.playerService.parsePlayers(data);
    });
  }

  public players: Array<Player> = new Array<Player>();
  public selectedPlayer: Player;
  public fallbackPlayer: Player;
  public edit: boolean = false;
  public new: boolean = false;

  public selectPlayer(player:Player) {
    this.selectedPlayer = player;
    this.edit = false;
    this.new = false;
  }

  public newPlayer() {
    this.fallbackPlayer = this.selectedPlayer;
    this.selectedPlayer = new Player("");
    this.new = true;
    this.edit = true;
  }

}
