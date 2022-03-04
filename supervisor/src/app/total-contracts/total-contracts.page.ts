import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-total-contracts',
  templateUrl: './total-contracts.page.html',
  styleUrls: ['./total-contracts.page.scss'],
})
export class TotalContractsPage implements OnInit {

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
