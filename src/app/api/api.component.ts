import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private _http:HttpService) { }

  
  ngOnInit() {
    // var body = document.getElementsByTagName('body')[0];
    // body.classList.add('api-page');
    
    // var navbar = document.getElementsByTagName('nav')[0];
    // // navbar.classList.add('navbar-transparent');
    this._http.myMethod();
}
ngOnDestroy(){
    // var body = document.getElementsByTagName('body')[0];
    // body.classList.remove('api-page');

    // var navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.remove('navbar-transparent');
}

}
