import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Posts";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {

  }
  getPostsOfUser(id:number) :Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url + `?userId=` +id );
  }
}
