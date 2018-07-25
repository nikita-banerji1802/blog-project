import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from "../posts.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  param : any;
  postData : any;
  data : any;
  constructor(private route:ActivatedRoute, private service:PostsService) {
    this.param = this.route.snapshot.params;  
    this.data = this.param.id;
  
    this.postData = [];
    let d = this.service.showDetails();   
    for(let i = 0; i < d.length; i++) {
      if(d[i] == d[this.data])
      this.postData.push(d[i]);
      } 
  }

  ngOnInit() {
  }

}
