import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.page.html',
  styleUrls: ['./show-message.page.scss'],
})
export class ShowMessagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  irHome() {
    this.router.navigate(['/home']);
  }
}
