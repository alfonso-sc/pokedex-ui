import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypesService {

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonTypes(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.apiUrl}/Types`
    )
  }
}