import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-installation-manager-detail',
  templateUrl: './installation-manager-detail.page.html',
  styleUrls: ['./installation-manager-detail.page.scss'],
})
export class InstallationManagerDetailPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
