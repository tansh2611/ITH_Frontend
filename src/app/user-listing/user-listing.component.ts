import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  message:any;
  users: any;
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe(res => this.users = res);
  }

  deleteButton(data) {
    this._dataService.deleteData(data)
      .subscribe(res => this.message = JSON.parse(JSON.stringify(res)).message);
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
