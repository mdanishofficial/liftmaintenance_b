import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expired-contracts',
  templateUrl: './expired-contracts.page.html',
  styleUrls: ['./expired-contracts.page.scss'],
})
export class ExpiredContractsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  contract(){
    this.router.navigateByUrl('total-contracts');
  }
  month(){
    this.router.navigateByUrl('current-month-expiring');
  }
  expired(){
    this.router.navigateByUrl('expired-contracts');
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
