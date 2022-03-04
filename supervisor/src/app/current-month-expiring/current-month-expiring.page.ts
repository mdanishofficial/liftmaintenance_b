import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-current-month-expiring',
  templateUrl: './current-month-expiring.page.html',
  styleUrls: ['./current-month-expiring.page.scss'],
})
export class CurrentMonthExpiringPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  contract(){
    this.router.navigateByUrl('total-contracts');
  }
  month(){
    this.router.navigateByUrl('current-month-contract');
  }
  expired(){
    this.router.navigateByUrl('expired-contracts');
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
