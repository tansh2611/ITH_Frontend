import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  formdata: FormGroup;
  Message:any;
  
  constructor(private router: Router, private _formBuilder: FormBuilder, private _dataService: DataService) {
    this.formdata = this._formBuilder.group({
      firstname: [null,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]*$')])],
      lastname: [null,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]*$')])],
      email: [null,Validators.compose([Validators.required,Validators.maxLength(50), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      phoneno: [null,Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern('^[0-9]*$')])],
      age: [null,Validators.compose([Validators.required,Validators.maxLength(2), Validators.pattern('^[0-9]*$')])],
      city: [null,Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')])],
      state: [null,Validators.compose([Validators.required,Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)])],
      country: [null,Validators.compose([Validators.required,Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')])]
    })
   }

  ngOnInit() {
  }

  onClickSubmit(){
    this._dataService.addData(this.formdata.value)
      .subscribe(res => this.Message = JSON.parse(JSON.stringify(res)).message);
      
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
