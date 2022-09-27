import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  endpoint = 'http://localhost:8080/api/birds';

  constructor(private httpClient: HttpClient) { }

  getBirds(){
    return this.httpClient.get(this.endpoint);
  }
}
