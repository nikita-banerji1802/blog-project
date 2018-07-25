import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from "../posts.service";
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user : any;
  name : Array<any>;
  para : any;
  constructor(private router:Router, private service:PostsService) { 
    this.user = this.service.showDetails();
    }
  
  ngOnInit() {
  }
  loginuser(e){
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    this.para = '/userdashboard/'+username;
    for(let i = 0;i < this.user.length;i++){
      if(username == this.user[i].userID && password == "admin"){
        this.service.setUserLoggedIn();
        this.router.navigateByUrl(this.para);
      }
    }
    return false;
  }
}
