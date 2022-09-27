import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Bird {
  _id   : number;
  name  : string;
  genre : string;
  scope : string;
  color : string;
}

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  endpoint = 'http://localhost:8080/api/birds';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  //Endpoints client methods

  createBird(bird: Bird): Observable<any> {
    return this.httpClient.post<Bird>(this.endpoint, JSON.stringify(bird), this.httpOptions)
      .pipe(
        catchError(this.handleError<Bird>('Error occured'))
      );
  }

  getBird(id): Observable<Bird[]> {
    return this.httpClient.get<Bird[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Bird fetched: ${id}`)),
        catchError(this.handleError<Bird[]>(`Get Bird id=${id}`))
      );
  }

  getBirds(): Observable<Bird[]> {
    return this.httpClient.get<Bird[]>(this.endpoint)
      .pipe(
        tap(Birds => console.log('Birds retrieved!')),
        catchError(this.handleError<Bird[]>('Get Bird', []))
      );
  }

  updateBird(id, bird: Bird): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(bird), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Bird updated: ${id}`)),
        catchError(this.handleError<Bird[]>('Update bird'))
      );
  }

  deleteBird(id): Observable<Bird[]> {
    return this.httpClient.delete<Bird[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Bird deleted: ${id}`)),
        catchError(this.handleError<Bird[]>('Delete bird'))
      );
  }

  getAllBirds(){
    return this.httpClient.get(this.endpoint);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
