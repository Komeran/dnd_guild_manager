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

  public selectPlayer(player:Player) {
    this.selectedPlayer = player;
  }

}
