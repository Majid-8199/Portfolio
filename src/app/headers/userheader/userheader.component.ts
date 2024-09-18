import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements AfterViewInit {
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  ngAfterViewInit() {
    if (this.toggleBtn && this.dropdownMenu && this.closeBtn) {
      // Adding click event to the toggle button after the view has been initialized
      this.toggleBtn.nativeElement.onclick = () => {
        const dropdownMenuEl = this.dropdownMenu.nativeElement;

        // Toggling the dropdown menu visibility
        dropdownMenuEl.classList.toggle('open');
      };

      // Adding click event to the close button
      this.closeBtn.nativeElement.onclick = () => {
        const dropdownMenuEl = this.dropdownMenu.nativeElement;

        // Closing the dropdown menu
        dropdownMenuEl.classList.remove('open');
      };
    }
  }
}