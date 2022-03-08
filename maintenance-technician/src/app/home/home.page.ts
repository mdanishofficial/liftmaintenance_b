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

  totalinstallation() {
    console.log('inside Installation');
  this.router.navigateByUrl('totalinstallation');
  }

  todayinstallation() {
    console.log('inside Installation');
    this.router.navigateByUrl('todayinstallation');
  }

  installationDetail() {
    console.log('inside Installation');
    this.router.navigateByUrl('installationdetails');
  }
  assignedInstallation() {
    console.log('inside Installation');
    this.router.navigateByUrl('assignedinstallation');
  }

  malfunctions() {
    console.log('inside Installation');
    this.router.navigateByUrl('newmalfunction');
  }

  bills() {
    console.log('inside Installation');
    this.router.navigateByUrl('unpaid-bill');
  }

  installation_data = [
    { Installation_id:'1',
      Client_Name: 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
    {
      Installation_id: '2',
      Client_Name : 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
{
      Installation_id: '3',
      Client_Name: 'Naeem Arshad',
      Client_Location : 'Abu Dhabi',
    }

  ];

}


