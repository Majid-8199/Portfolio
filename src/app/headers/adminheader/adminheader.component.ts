import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent implements AfterViewInit {
  
  constructor(private service:AdminService, private router: Router){}

  logOut(){
    this.service.logOut();
    this.router.navigate([''])
  }

  @ViewChild('toggleBtn') toggleBtn!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  ngAfterViewInit() {
    if (this.toggleBtn && this.dropdownMenu && this.closeBtn) {
      this.toggleBtn.nativeElement.onclick = () => {
        const dropdownMenuEl = this.dropdownMenu.nativeElement;
        dropdownMenuEl.classList.toggle('open');
      };
      this.closeBtn.nativeElement.onclick = () => {
        const dropdownMenuEl = this.dropdownMenu.nativeElement;
        dropdownMenuEl.classList.remove('open');
      };
    }
  }
}
