import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { CharactersComponent } from './characters/characters.component';
import { ItemsComponent } from './items/items.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CharactersComponent,
    ItemsComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
