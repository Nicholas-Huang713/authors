import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data=>{
      console.log("Got all authors", data);
      this.authors = data;
    })
  }

  deleteAuthor(id: string){
    this._httpService.deleteAuthor(id).subscribe(data=>{
      console.log("Deleted Author", data);
      this.getAuthorsFromService();
    })
  }
}

