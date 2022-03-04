import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bill-manager-detail',
  templateUrl: './bill-manager-detail.page.html',
  styleUrls: ['./bill-manager-detail.page.scss'],
})
export class BillManagerDetailPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  home(){
    this.router.navigateByUrl('home');
  }

}
