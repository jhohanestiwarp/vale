import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatConfirmDialogComponent } from 'projects/dialogs-lib/src/components/mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LoginComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RecaptchaModule,
    MatDialogModule,
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService
  ]
})
export class AuthorizerModule { }
