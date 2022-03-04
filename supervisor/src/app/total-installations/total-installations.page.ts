import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-total-installations',
  templateUrl: './total-installations.page.html',
  styleUrls: ['./total-installations.page.scss'],
})
export class TotalInstallationsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }

}
