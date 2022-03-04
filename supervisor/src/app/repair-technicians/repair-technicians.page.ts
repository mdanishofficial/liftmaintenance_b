import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-repair-technicians',
  templateUrl: './repair-technicians.page.html',
  styleUrls: ['./repair-technicians.page.scss'],
})
export class RepairTechniciansPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
  detail(){
    this.router.navigateByUrl('repair-technician-detail');
  }

}
