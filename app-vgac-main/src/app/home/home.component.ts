import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { APIResponse, Game } from '../models/Models';

import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    public gameService: GamesService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    ) { }

  private routeSub: Subscription;
  private gameSub: Subscription;
  public sort: string;
  public games: Array<Game>;

  ngOnInit(): void {

    /* Heading Typewriting Text */
    /* START */

    const heading = document.querySelector("#heading");
    const heading2 = document.querySelector("#heading2");

    const writer = new Typewriter(heading, {
      typeColor: 'white',
      typeSpeed: 60
    })

    const writer2 = new Typewriter(heading2, {
      typeColor: 'white',
      typeSpeed: 60
    })

    writer.type(" c'est ").removeCursor().then(writer2.start.bind(writer2)).start();
    writer2.type("plus de 500 000 jeux disponibles")
    .rest(2000)
    .clear()
    .type("sur toutes les plateformes disponibles sur le marché")
    .rest(2000)
    .clear()
    .type("gratuit et simple d'utilisation")
    .rest(2000)
    .clear()
    .then(writer.start.bind(writer))


    /* END */

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    })
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.gameService.getGamesList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList)
      })
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

}
