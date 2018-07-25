import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  id : any;
  userData : any;
  constructor(private service:PostsService, private route:ActivatedRoute) {
    this.route.params.subscribe(
      params => {
      this.id = params['para'];
      console.log(this.id);
      this.userData = [];
        let d = this.service.showDetails();

        for(let i = 0; i < d.length; i++) {
        if(d[i].userID == this.id)
        this.userData.push(d[i]);
        }
        console.log(this.userData)
    })
   }
  ngOnInit() {
  }
}
