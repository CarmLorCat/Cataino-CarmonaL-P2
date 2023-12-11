import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  weatherForecasts: any;
  constructor(private http:HttpClient){
  
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('http://localhost:5207/weatherforecast').subscribe(
      response=> { this.weatherForecasts = response;},
      error => {console.log(error)}
      );
  }
}


