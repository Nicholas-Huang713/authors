import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author_id: any;
  errors: any;
  author: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.author_id = params['id'];
    });
    this.getAuthorFromService();
  }

  getAuthorFromService(){
    this._httpService.getAuthor(this.author_id).subscribe(data=>{
      this.author=data;  
    })
  }

  updateAuthor(id){
    console.log(this.author);
    this._httpService.editAuthor(id, this.author).subscribe(data=>{
      if(data['message']==='Error'){
        this.errors = data['data']['errors']['name']['message'];
      }else{
        this.author = {name: ""};
        this._router.navigate(['']);
      }
    })
  }
}
