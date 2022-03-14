/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router) {}

  totalVisits() {
  this.router.navigateByUrl('visit-details');
  }

  todayVisits() {
    this.router.navigateByUrl('visit-details');
  }

  upcomingVisits() {
    this.router.navigateByUrl('upcoming-visits');
  }
  previousVisits() {
    this.router.navigateByUrl('previous-visits');
  }

  visitReport() {
    this.router.navigateByUrl('visit-details');
  }

  preVisits() {
    this.router.navigateByUrl('details-of-visit');
  }

  installation_data = [
    { Installation_id:'01',
      Client_Name: 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
    {
      Installation_id: '02',
      Client_Name : 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
{
      Installation_id: '03',
      Client_Name: 'Naeem Arshad',
      Client_Location : 'Abu Dhabi',
    }

  ];

}


