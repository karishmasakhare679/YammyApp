import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailId : any =" karishmasakhare679@gmail.com"
  emailForm !: FormGroup;
  ApiResult: any;
  submitted = false;
  email!: AbstractControl;
  name!: AbstractControl;
  subject!: AbstractControl;
  message!: AbstractControl;
  

    constructor(private fb:FormBuilder, private mainService: MainService, private router: Router) {
  
     }
  
    ngOnInit(): void {
      // this.emailForm =  new FormGroup({
      //     name: new FormControl(""),
      //     email: new FormControl(""),
      //     subject: new FormControl(""),
      //     message: new FormControl(""),
          
      //   });
      this.emailForm = this.fb.group({
        name:['', [Validators.required, Validators.maxLength(25)]], //Add Others form control as needed
        email:['', [Validators.required, Validators.pattern((/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{3,4})?$/g))]],
        subject:['', [Validators.required,Validators.maxLength(30)]],
        message:['', [Validators.required, Validators.maxLength(100)]]
      })
      this.email = this.emailForm.controls['email'];
      this.name = this.emailForm.controls['name'];
      this.subject = this.emailForm.controls['subject'];
      this.message = this.emailForm.controls['message'];
    }

    
   get f() { return this.emailForm.controls; }
    
   


    onSendMessage(){
      this.submitted = true; // stop hear if form is invalid
       console.warn(this.emailForm.value);  
    }


  // send Email//
    Email_send(){debugger
  
      this.submitted = true; // stop hear if form is invalid
      if (this.emailForm.invalid) {
        return;
      }
      var name= this.emailForm.value.name; 
      var email= this.emailForm.value.email;
      var subject= this.emailForm.value.subject;
      var message = this.emailForm.value.message;
      var EmailBodyMsg = "<table ><thead><tr><th>Oerder Details</th></tr></thead><tbody><tr><td>Name:</td><td>" + name + "</td></tr><tr><td>Email:</td><td>" + email + "</td></tr><tr><td>Subject: </td><td>" + subject + "</td></tr><tr><td>Massage : </td><td>" + message + "</td></tr></tbody></table>";
      var Moobj:any = {};
      Moobj.EmailSubject = "For Contact Us";
      Moobj.EmailTo = this.emailId;
      Moobj.PkSystemEmailSetting = 4;
      Moobj.message = EmailBodyMsg;
      this.mainService.emailMethod(Moobj).subscribe(value => { debugger
        this.ApiResult = value;
        //console.log(this.emailForm.value);
        console.log(JSON.stringify(this.ApiResult))
      });
      alert("Send message Successfully");
      this.Reset();
    }
  
    Reset(){
      this.submitted = false;
      this.emailForm.reset();
    }

    
}
