import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Game } from '../models/Models';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: Game;
  gameId: any;
  gameSub: Subscription;
  routeSub: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string) {
    this.gameSub = this.gameService.getGameDetails(id).subscribe((gameResp: Game) => {
      this.game = gameResp;
      console.log(this.game)
    });
  }

}
