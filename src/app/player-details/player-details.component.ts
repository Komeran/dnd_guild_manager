import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {PlayerService} from '../players/player.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }

  public playerForm = new FormGroup({
    username : new FormControl('', [
      Validators.required
    ]),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', [
      Validators.email
    ]),
    discordid: new FormControl('')
  });


  public matcher = new MyErrorStateMatcher();

  // Input values
  @Input()
  public player:Player;
  @Input()
  public newFallback:Player;
  @Input()
  public edit:boolean;
  @Input()
  public new:boolean;

  public onSubmit() {
    this.player.username = this.playerForm.controls.username.value;
    this.player.firstname = this.playerForm.controls.firstname.value;
    this.player.lastname = this.playerForm.controls.lastname.value;
    this.player.setPhone(this.playerForm.controls.phone.value);
    this.player.setEmail(this.playerForm.controls.email.value);
    this.player.setDiscordId(this.playerForm.controls.discordid.value);
    if(this.new) {
      // TODO Add Player
      this.playerService.addPlayer(this.player).subscribe((player: Player) => {
        if (!player)
          alert("meh");
        else {
          // TODO Show
          this.newFallback = null;
        }
        this.edit = false;
        this.new = false;
        this.clearEditValues();
      });
    }
    else {
      this.playerService.updatePlayer(this.player).subscribe((player: Player) => {
        if (!player)
          alert("meh");
        else {
          // TODO Show
        }
        this.edit = false;
        this.new = false;
        this.clearEditValues();
      });
    }
  }

  private clearEditValues() {
    this.playerForm.controls.username.setValue("");
    this.playerForm.controls.firstname.setValue("");
    this.playerForm.controls.lastname.setValue("");
    this.playerForm.controls.phone.setValue("");
    this.playerForm.controls.email.setValue("");
    this.playerForm.controls.discordid.setValue("");
  }

  public editSelectedPlayer() {
    this.edit = true;
    this.new = false;
    this.playerForm.controls.username.setValue(this.player.username);
    this.playerForm.controls.firstname.setValue(this.player.firstname);
    this.playerForm.controls.lastname.setValue(this.player.lastname);
    this.playerForm.controls.phone.setValue(this.player.getPhone());
    this.playerForm.controls.email.setValue(this.player.getEmail());
    this.playerForm.controls.discordid.setValue(this.player.getDiscordId());
  }

  public cancelNewPlayer() {
    this.player = this.newFallback;
    this.edit = false;
    this.new = false;
    this.clearEditValues();
  }
}
