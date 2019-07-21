import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getAuthors();  
  } 

  getAuthors(){
    return this._http.get('/authors');
  }

  deleteAuthor(id){
    return this._http.delete('/authors/'+ id);
  }

  addAuthor(newAuthor){
    return this._http.post('/authors',newAuthor);
  }

  editAuthor(id, author){
    return this._http.put('/authors/edit/'+id, author);
  }

  getAuthor(id){
    return this._http.get('/authors/'+id);
  }
}
