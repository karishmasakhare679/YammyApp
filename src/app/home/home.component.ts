import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, PatternValidator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormGroup,AbstractControl} from '@angular/forms';

import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

emailId : any =" karishmasakhare679@gmail.com"
emailForm !: FormGroup;
bookTableForm !: FormGroup;
ApiResult: any;
submitted = false;
  email!: AbstractControl;
  subject!: AbstractControl;
  name ! : AbstractControl;
  message! : AbstractControl;


  constructor(private fb:FormBuilder, private mainService: MainService, private router: Router) {

   }

  ngOnInit(): void 
  {
    this.bookTableForm =  this.fb.group({
        name: new FormControl (''),
        email : ['', [Validators.required , Validators.pattern((/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{3,4})?$/g))]],
        phone : new FormControl(''),
        date :new FormControl(''),
        time : new FormControl(''),
        people :new FormControl(''),
        message :new FormControl('') 
      });
      this.emailForm = this.fb.group({
      name:['', [Validators.required, Validators.maxLength(10)]], //Add Others form control as needed
      email:['', [Validators.required, Validators.pattern((/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{3,4})?$/g))]],
      subject:['', [Validators.required, Validators.maxLength(10)]],
      message:['', [Validators.required, Validators.maxLength(100)]]
    })
    this.email = this.emailForm.controls['email'];
    this.name = this.emailForm.controls['name'];
    this.subject = this.emailForm.controls['subject'];
    this.message = this.emailForm.controls['message'];

  }

  get f() { return this.emailForm.controls; }

  onEmailSend(){
    console.warn(this.emailForm.value);
   }

// send Email//
  Email_send(){ debugger
    
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
    alert("Send massage Successfully");
    this.Reset();
  }

  Reset(){
    this.submitted = false;
    this.emailForm.reset();
  }




//Book table///

  bookaTable(){ 
      this.submitted = true; // stop hear if form is invalid
      if (this.bookTableForm.invalid) {
        return;
      }
      var name= this.bookTableForm.value.name; 
      var email= this.bookTableForm.value.email;
      var phone= this.bookTableForm.value.phone;
      var date = this.bookTableForm.value.date;
      var time = this.bookTableForm.value.time;
      var people = this.bookTableForm.value.people;
      var message = this.bookTableForm.value.message;
      var EmailBodyMsg = "<table ><thead><tr><th>Oerder Details</th></tr></thead><tbody><tr><td>Name:</td><td>" + name + "</td></tr><tr><td>Email:</td><td>" + email + "</td></tr><tr><td>Phone Number: </td><td>" + phone + "</td></tr><tr><td>Date : </td><td>" + date + "</td><tr><td>Time :</td><td>"+ time +"</td></tr>  <tr><td>People :</td><td>"+ people +"</td></tr>     <tr><td>Message :</td><td>"+ message +"</td></tr>      </tbody></table>";
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
      alert("Send oerder details Successfully");
      this.Reset();
    }
}

