import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat : any;
  postData : any;
  data : any;
  id : any;
  constructor(private route:ActivatedRoute, private service:PostsService, private router:Router) { 

      this.route.params.subscribe(
        params => {
        this.id = params['parval'];
        console.log(this.id)

        this.postData = [];
        let d = this.service.showDetails();

        for(let i = 0; i < d.length; i++) {
        if(d[i].category == this.id)
        this.postData.push(d[i]);
        }
        console.log(this.postData)
      })
      
      
  }

  ngOnInit() {
  }

}
