import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pending-complains',
  templateUrl: './pending-complains.page.html',
  styleUrls: ['./pending-complains.page.scss'],
})
export class PendingComplainsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  solved(){
    this.router.navigateByUrl('solved-complains');
  }
  pending(){
    this.router.navigateByUrl(' pending-complains');
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
