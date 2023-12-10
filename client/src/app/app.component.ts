import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  posts: any;
constructor(private http: HttpClient){

}

  ngOnInit(): void {
    this.http.get('http://localhost:5207/api/posts').subscribe(
    response=> { this.posts = response;},
    error => {console.log(error)}
    );
  }

}
