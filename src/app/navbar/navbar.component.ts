import { Component, OnInit } from '@angular/core';
import { Navbar} from '../models/Navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: Navbar[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navbar = [ 
    {
    title1: "browse students",
    title2: "browse tutors",
    title3: "reports"
    } 
   ]
    
 
  }

}
