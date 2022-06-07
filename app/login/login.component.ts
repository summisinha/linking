import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response=this.http.get("");
    response.subscribe((data)=>this.login=data);

  }

}
