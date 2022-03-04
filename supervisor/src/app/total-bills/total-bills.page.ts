import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-total-bills',
  templateUrl: './total-bills.page.html',
  styleUrls: ['./total-bills.page.scss'],
})
export class TotalBillsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }


}
