import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, delay} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = environment.api;
  token : any;
  userId : any;
  pwd : any;
  email : any;
  isAuth$ = new BehaviorSubject<boolean>(false)


  constructor(private http: HttpClient) {
    this.initAuth();
  }

  initAuth(){
    if(typeof localStorage !== "undefined"){
      
      const data  =  JSON.parse(localStorage.getItem('auth') || "{}"); 
      if(data){
        this.userId = data.userId;
        this.token = data.token;
        this.pwd= data.pwd;
        this.email = data.email;
        this.isAuth$.next(true);
      }

    }
    //console.log( this.pwd);
  }
  list(){
    const params = new HttpParams()
    .set('email', this.email)
    .set('password', this.pwd);
  
    return this.http.get(this.api+'/products/list',{params}).pipe(map(res => {
        console.log(res);
        return res;
    }))
 }
    /*this.http.get(this.api+'/products/list',{params}).subscribe(
      (listData)=>{

        console.log(listData)
        //auth users
        if(listData){
      
          console.log(listData)
        
        }
        
      }
      
      
    )*/

   
  

}
