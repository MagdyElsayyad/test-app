import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StylesChangerService } from '../core/services/style.service';
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AccountRoutingModule, AuthModule],
})
export class AccountModule {
  constructor(styleService: StylesChangerService) {
    styleService.loadStyle('pmo');
  }
}
