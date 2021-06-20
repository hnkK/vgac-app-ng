import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod'
import { APIResponse, Game } from './models/Models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(private http: HttpClient) { }

  public getGamesList(
    ordering: string, 
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params
    })
  }

  public getGameDetails(id: string): Observable<Game> {

    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);


    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      }))

  }

}
