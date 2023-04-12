import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
constructor(private auth:AuthService , private router : Router){}

logout(){
  this.auth.logout();
  this.auth.deletetoken();
  window.location.reload();

}
isActive(routerLink: string): boolean {
  return this.router.isActive(routerLink, true);
}

}
