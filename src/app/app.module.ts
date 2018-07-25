import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { LoginformComponent } from './loginform/loginform.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PostsService } from './posts.service';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'',component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostComponent},
  { path: 'category/:parval', component: CategoryComponent },
  { path: 'search/:tags', component: SearchComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'userdashboard/:para',canActivate:[AuthGuard],component: UserdashboardComponent },
  { path: '**',component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    CategoryComponent,
    LoginformComponent,
    UserdashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
