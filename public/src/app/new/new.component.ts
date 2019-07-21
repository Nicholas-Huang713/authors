import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;
  newAuthor = {name: ""};
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  }

  addAuthor(){
    console.log(this.newAuthor);
    this._httpService.addAuthor(this.newAuthor).subscribe(data=>{
      console.log("added new author", data);
      if(data['message']==='Error'){
        this.errors = data['data']['errors']['name']['message'];
        // console.log('asdfasfsdfsdf')
        // console.log(data['errors']['name']['name'])
      } else{
        this.newAuthor = {name: ""};
        this._router.navigate(['']);
      }
    })
  }
}
