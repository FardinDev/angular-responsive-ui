import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chowkbazar',
  templateUrl: './chowkbazar.component.html',
  styleUrls: ['./chowkbazar.component.scss']
})
export class ChowkbazarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('chowkbazar-page');
    
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    

}
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('chowkbazar-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}
}
