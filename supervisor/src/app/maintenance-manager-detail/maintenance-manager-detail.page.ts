import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maintenance-manager-detail',
  templateUrl: './maintenance-manager-detail.page.html',
  styleUrls: ['./maintenance-manager-detail.page.scss'],
})
export class MaintenanceManagerDetailPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
