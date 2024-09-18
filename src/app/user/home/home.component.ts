import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user:any;

  constructor(private service:UserService, private router:Router) {}

  ngOnInit(): void {
    this.service.getUserDetails().subscribe(e=>this.user=e);
    console.log(this.user)
  }

  downloadCV(id: number) {
    this.service.downloadCV(id).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `AbdulMajide-CV.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
