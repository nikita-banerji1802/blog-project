import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList : Array<any>;
  constructor(private service:PostsService, private router:Router) { 
    this.postList = [];
    let d = this.service.showDetails();
    for(let i = 0; i < d.length; i++) {
      this.postList.push(d[i]);
    }
  }

  ngOnInit() {
  }

}
