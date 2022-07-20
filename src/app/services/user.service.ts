import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const configUrl="https://randomuser.me/api/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUserInfo(){
    return this.httpClient.get<{results:any}>(configUrl);
  }
}
