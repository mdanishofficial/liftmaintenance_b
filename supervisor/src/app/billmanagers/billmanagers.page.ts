import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-billmanagers',
  templateUrl: './billmanagers.page.html',
  styleUrls: ['./billmanagers.page.scss'],
})
export class BillmanagersPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  home(){
    this.router.navigateByUrl('home');
  }
  detail(){
  this.router.navigateByUrl('bill-manager-detail');
}

}
