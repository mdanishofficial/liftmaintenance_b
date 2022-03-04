import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  home(){
    this.router.navigateByUrl('home');
  }
  managers(){
    this.router.navigateByUrl('managerslist');
  }
  installationlist(){
    this.router.navigateByUrl('installation-managers-list');
  }
  billmanagers(){
    this.router.navigateByUrl('billmanagers');
  }
  mtechnicians(){
    this.router.navigateByUrl('maintenance-technicians');
  }
  repairtechnicians(){
    this.router.navigateByUrl('repair-technicians');
  }
  installtechnicians(){
    this.router.navigateByUrl('installation-technicians');
  }
  totalMalfunctions(){
    this.router.navigateByUrl('total-malfunctions');
  }
  complains(){
    this.router.navigateByUrl('solved-complains');
  }
  installations(){
    this.router.navigateByUrl('total-installations');
  }
  bills(){
    this.router.navigateByUrl('total-bills');
  }
  contracts(){
    this.router.navigateByUrl('total-contracts');
  }
  clients(){
    this.router.navigateByUrl('total-clients');
  }
}
