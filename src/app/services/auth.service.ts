import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 private api = environment.api;
token : any;
userId : any
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
        this.isAuth$.next(true);
      }
    }
  }
  signUp(email: string, password:string){

    return new Promise((resolve,reject)=>{

      this.http.post(this.api+'/users/login',{email : email,password: password}).subscribe(
        (signUpData: any)=>{

          //auth users
          if(signUpData.status === 200){
            this.isAuth$.next(true)
            console.log(signUpData)
            this.token= signUpData.token;
            this.userId = signUpData.userId
            if(typeof localStorage !== "undefined"){
              localStorage.setItem('auth',JSON.stringify(signUpData));
            }
            resolve(true);

          }
          else{
            reject(signUpData.message)
          }
        },
        (error)=>{
          reject(error)
        }
        
      )

    })
  }

  signIn(email: string, password:string){

    return new Promise((resolve,reject)=>{
        this.http.post(this.api+'/users/signin',{userId : email,password: password}).subscribe(
          (authData :any)=>{
            
            
            this.isAuth$.next(true)
         
            resolve(true);
          },
          (error)=>{
            reject(error)
          }
        )

    })
    

  }

  logout(){
    this.isAuth$.next(false);
    this.userId = null
    this.token = null
    if(typeof localStorage !== "undefined"){
      localStorage.setItem('auth',null || '{}');
    }


    

  }
}
