import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parval : any;
  title = 'MyBlog Project';
  catList: Array<any>;
  status : any;
  tags : any;
  constructor(private router:Router,private service:PostsService){
    this.catList = [];
    let d = this.service.showDetails();
    for(let i = 0; i < 5; i++) {
      this.catList.push(d[i]);
    }
    console.log(this.catList)
    this.status = this.service.getUserLoggedIn();
  }
  categoryNav(id: string){
    this.parval = '/category/'+id;
    this.router.navigateByUrl(this.parval);   
  }
  searching(e){
    let tag = e.target.elements[0].value;
    this.tags = '/search/'+tag;
    this.router.navigateByUrl(this.tags);
    return false;
  }
}
