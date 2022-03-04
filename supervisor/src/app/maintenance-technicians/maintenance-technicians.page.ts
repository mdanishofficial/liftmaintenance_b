import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maintenance-technicians',
  templateUrl: './maintenance-technicians.page.html',
  styleUrls: ['./maintenance-technicians.page.scss'],
})
export class MaintenanceTechniciansPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  home(){
    this.router.navigateByUrl('home');
  }
detail(){
  this.router.navigateByUrl('maintenance-technician-detail');
}
}
