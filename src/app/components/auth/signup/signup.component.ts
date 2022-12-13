import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  signUpForm : any 
  messageError : any

  constructor(private fromBuilder : FormBuilder,
             private router : Router,
             private auth : AuthService) { }
  

  

  ngOnInit(): void {
    
    this.signUpForm = this.fromBuilder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    })



  }
onsubmit (){
 const email = this.signUpForm.get('email').value
 const password = this.signUpForm.get('password').value

 //console.log('fg');
 this.auth.signUp(email,password)
 .then(()=>{
    console.log('oooooooook');
    this.router.navigate(['/shop'])
 }
 )
 .catch(
  (err)=>{
    this.messageError = err.message
    console.log(this.messageError)
  }
 )

 


}

}
