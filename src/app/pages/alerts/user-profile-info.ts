// user-profile.component.ts

import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'user-profile',
  template: `
  <ion-list *ngIf="auth.user$ | async as user">
    <ion-item lines="none">
      <ion-avatar slot="start">
        <img [src]="user.picture" alt="User Avatar">
      </ion-avatar>
      <ion-label>{{ user.nickname }}</ion-label>
    </ion-item>
  </ion-list>
`,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
