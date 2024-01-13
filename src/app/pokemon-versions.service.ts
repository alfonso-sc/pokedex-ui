import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonVersionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonVersions(): Observable<string[]> {
    return this.http
      .get<string[]>(`${environment.apiUrl}/Versions`);
  }
}
