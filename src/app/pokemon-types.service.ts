import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { PokemonType } from './models/pokemon-type';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypesService {

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonTypes(): Observable<PokemonType[]> {
    return this.http.get<PokemonType[]>(
      `${environment.apiUrl}/Types`
    )
  }
}