import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isCollapsed = false;
  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) {}

  toggleCollapse() {
    this.isCollapsedChange.emit(!this.isCollapsed);
  }

  logout() {
    this.tokenService.setToken(null);
    this.router.navigate(['/sign-in']);
  }
}
