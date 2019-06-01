import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public Player:Player;

}
