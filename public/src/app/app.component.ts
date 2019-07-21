import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite Authors';

  constructor(private _httpService: HttpService){}

  ngOnInit(){
  }
}
