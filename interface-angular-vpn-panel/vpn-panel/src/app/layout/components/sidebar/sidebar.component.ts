import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isAdmin$ = this.authService.currentUser$.pipe(
    map(user => user?.isAdmin ?? false)
  );

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      console.log('🔍 Usuário carregado no Sidebar:', user);
    });

    this.isAdmin$.subscribe(isAdmin => {
      console.log('🛡️ isAdmin no Sidebar:', isAdmin);
    });
  }
}
