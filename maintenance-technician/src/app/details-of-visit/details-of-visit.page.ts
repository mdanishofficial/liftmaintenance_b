/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/quotes
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-details-of-visit',
  templateUrl: './details-of-visit.page.html',
  styleUrls: ['./details-of-visit.page.scss'],
})
export class DetailsOfVisitPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }


profile_data=[
{
  client_name: 'Ahmad Gul',
  contact: '03331234567',
city: 'Dubai',
building_type: 'Residential',
maintenance_start_date: '20-12-2020',
maintenance_end_date: '20-12-2020'
}

];

}
