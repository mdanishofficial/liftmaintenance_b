import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-installation-technicians',
  templateUrl: './installation-technicians.page.html',
  styleUrls: ['./installation-technicians.page.scss'],
})
export class InstallationTechniciansPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }

  detail(){
    this.router.navigateByUrl('installation-technician-detail');
  }

}
