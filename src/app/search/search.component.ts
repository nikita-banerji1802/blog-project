import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Tag : any;
  arr : Array<any>;
  userData : Array<any>;
  constructor(private service:PostsService, private route:ActivatedRoute) {
    this.userData = [];
    this.route.params.subscribe(
      params => {
      this.Tag = params['tags'];
      this.arr = this.Tag.split(" ").map(String);
      let d = this.service.showDetails();

      for(let i = 0;i < d.length;i++)
      { 
        for(let j = 0;j < this.arr.length;j++)
        {
          for(let k = 0;k < d[i].tag.length;k++)
          {
            if(this.arr[j] == d[i].tag[k]){
              this.userData.push(d[i]);
            }
          }
        }       
      }
      })
  }
  ngOnInit() {
  }
}
