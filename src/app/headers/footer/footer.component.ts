import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  user:any;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUserDetails().subscribe(e=>this.user=e);
  }
}
