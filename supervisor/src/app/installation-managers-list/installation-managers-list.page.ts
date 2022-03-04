import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-installation-managers-list',
  templateUrl: './installation-managers-list.page.html',
  styleUrls: ['./installation-managers-list.page.scss'],
})
export class InstallationManagersListPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
  detail(){
    this.router.navigateByUrl('installation-manager-detail');
  }
}
