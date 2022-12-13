import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'node-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth : any; 

  constructor(
            private router : Router,
            private auth : AuthService) { }

  ngOnInit(): void {

    this.auth.isAuth$.subscribe((bool : boolean)=>{
    this.isAuth = bool;
  
 }
 )
 
}
logout(){
  this.auth.logout();
}

}
