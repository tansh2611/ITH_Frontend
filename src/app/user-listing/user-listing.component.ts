import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  message: any;
  users: any;
  isError: boolean = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData().subscribe(res => {
      var passedResponse: any = res;
      console.log("get data : ", res);

      if(passedResponse && !passedResponse.error){
        this.users = passedResponse.data;
        this.isError = false;
      } else {
        this.isError = true;
      }
      
    },
    error =>{
      this.isError = true;
      this.message = "Unable to connect to backend application!"
    });
  }

  deleteButton(data) {
    this._dataService.deleteData(data).subscribe(res => {
      var passedResponse: any = res;
      this.message = passedResponse.message;

      if(passedResponse && !passedResponse.error){
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
    error =>{
      this.isError = true;
      this.message = "Unable to connect to backend application!"
    });
  }

}
