import { Injectable } from '@angular/core';
import { DialogParams } from '../public-api';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }



  openConfirmDialog(params: DialogParams) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '624px',
      panelClass: 'dialog-popup-code',
      data: params
    });
  }


}
