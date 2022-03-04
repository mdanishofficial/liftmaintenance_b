import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solved-complains',
  templateUrl: './solved-complains.page.html',
  styleUrls: ['./solved-complains.page.scss'],
})
export class SolvedComplainsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  solved(){
    this.router.navigateByUrl('solved-complains');
  }
  pending(){
    this.router.navigateByUrl('pending-complains');
  }
  home(){
    this.router.navigateByUrl('home');
  }
  
}
