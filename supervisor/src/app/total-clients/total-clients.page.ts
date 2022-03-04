import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-total-clients',
  templateUrl: './total-clients.page.html',
  styleUrls: ['./total-clients.page.scss'],
})
export class TotalClientsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }

}
