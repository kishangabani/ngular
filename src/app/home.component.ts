import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: Home={
    id:1,
    name:'First Page'
  };
  constructor() { }

  ngOnInit() {
    let initCat = new Home();
    initCat = {'name' : 'Today', 'id' : 1 };
    this.home;
  }

}
export class Home{
  id:number;
  name:string;
}
