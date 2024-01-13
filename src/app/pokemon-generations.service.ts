import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonGenerationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonGenerations(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.apiUrl}/Generations`
    )
  }

}
