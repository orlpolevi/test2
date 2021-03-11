import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  name:string = "";
  lastName:string = "";
  userType:string = "";
  obj_from_api: any;
  bloop: any;

  constructor(private userService:UserService) {
  
   }

  ngOnInit(): void {

    //this.bloop = this.userService.get_user_by_id_from_api(4).then(d=>{ this.name = d.name});
      
    
    //console.log(this.userService.get_user_by_id_from_api(4))
    //this.obj_from_api = JSON.stringify(this.userService.get_user_by_id_from_api(4)) //stringed object
    this.obj_from_api = this.userService.get_user_by_id_from_api(4).subscribe(data => {
      this.name = data.name;this.lastName = data.lastName;this.userType = data.userType; console.log(data)}) ;//object it self
    
    }
  }


