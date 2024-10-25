import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../models/Music';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.lyrics.ovh/v1/';

  getLetraMusica(banda: string, musica: string): Observable<Music> {
    return this.http.get<Music>(this.url + `${banda}` + `/` + `${musica}`);
  }
}
