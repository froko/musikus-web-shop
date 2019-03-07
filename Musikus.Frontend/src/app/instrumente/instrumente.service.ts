import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Instrument, InstrumentListItem } from './instrumente.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumenteService {
  constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl: string) {}

  getAll(): Observable<InstrumentListItem[]> {
    const url = `${this.baseUrl}/api/instrumente`;
    return this.http.get<InstrumentListItem[]>(url);
  }

  get(artikelNr: string): Observable<Instrument> {
    const url = `${this.baseUrl}/api/instrumente/${artikelNr}`;
    return this.http.get<Instrument>(url);
  }

  getDescription(artikelNr: string): Observable<string> {
    const url = `${this.baseUrl}/descriptions/${artikelNr}.txt`;
    return this.http
      .get<string>(url, { responseType: 'text' as 'json' })
      .pipe(map(s => s.replace(new RegExp('\n', 'g'), '<br />')));
  }

  getTypen(): Observable<string[]> {
    const url = `${this.baseUrl}/api/instrumente/typen`;
    return this.http.get<string[]>(url);
  }

  getHersteller(): Observable<string[]> {
    const url = `${this.baseUrl}/api/instrumente/hersteller`;
    return this.http.get<string[]>(url);
  }
}
