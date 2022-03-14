/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-upcoming-visits',
  templateUrl: './upcoming-visits.page.html',
  styleUrls: ['./upcoming-visits.page.scss'],
})
export class UpcomingVisitsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  visit_data=[
    {
      visit_number:'01',
      client_name : 'Eman Afroz',
      location:'Abu Dhabi',
    },
    {
      visit_number:'02',
      client_name : 'Aneeza Rana',
      location:'Sharjah',
    },
    {
      visit_number:'03',
      client_name : 'Huzaifa Saramad',
      location:'Saudia',
    },
  ];

   today(){
    this.router.navigateByUrl('visit-details');
  }
  upcoming(){
    this.router.navigateByUrl('upcoming-visits');
  }
  previous(){
    this.router.navigateByUrl('previous-visits');
  }
  home(){
    this.router.navigateByUrl('home');
  }

}
