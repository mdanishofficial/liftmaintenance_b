import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managerslist',
  templateUrl: './managerslist.page.html',
  styleUrls: ['./managerslist.page.scss'],
})
export class ManagerslistPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
  detail(){
    this.router.navigateByUrl('maintenance-manager-detail');
  }
}
