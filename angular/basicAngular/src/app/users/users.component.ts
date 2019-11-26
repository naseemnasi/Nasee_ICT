import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor(public serceObject: GetuserService) {
  }
  usersdata;
  getusers() {
    this.serceObject.getUserService().subscribe((users)=>{
      this.usersdata=users;
      console.log(this.usersdata);

    });
    
  }

  

  ngOnInit() {
  }

}
