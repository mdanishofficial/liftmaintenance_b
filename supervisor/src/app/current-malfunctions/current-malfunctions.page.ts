/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-current-malfunctions',
  templateUrl: './current-malfunctions.page.html',
  styleUrls: ['./current-malfunctions.page.scss'],
})
export class CurrentMalfunctionsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  malfunctions_data=[
    {
      client_name:'Ahmed Gul',
      date: 'Sunday 21 Feb, 2022',
      technician_assigned : 'Technician Name',
      status:'new',
      type:'Mechanical',
      position: 'Danger'
    },
    {
      client_name:'Nadeem Ali',
      date: 'Sunday 21 Feb, 2022',
      technician_assigned : 'Technician Name',
      status:'old',
      type:'Mechanical',
      position: 'Effective'
    },
    {
      client_name:'Atif Shehzad',
      date: 'Sunday 21 Feb, 2022',
      technician_assigned : 'Technician Name',
      status:'Old',
      type:'Mechanical',
      position: 'Solved'
    },
  ];
   solved(){
    this.router.navigateByUrl('total-malfunctions');
  }
   current(){
    this.router.navigateByUrl('current-malfunction');
  }
  malfunctiondetails(){
    this.router.navigateByUrl('total-malfunction');
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
