import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';



@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  hide = true;
  hide1 = true;

  anio: number = new Date().getFullYear();
  showError: boolean = false;
  date = new Date('2020-01-01 00:01');
  minutes: string = '';
  seconds: string = '';


  constructor(
    private router: Router,
    private dialogService: DialogService
  ) {

  }
  ngOnInit(): void {
    this.countDown();
  }



  onOtpChange(event: any) {
    console.log(event);
  }

  onCodeChanged(code: string): void { }

  onCodeCompleted(code: string): void {

  }




  onInputFocus(hide: boolean) {
    if (hide === this.hide1) {
      this.hide1 = true;
    } else {
      this.hide = true;
    }
    console.log(this.hide);
  }

  onInputBlur(hide: boolean) {
    if (hide === this.hide1) {
      this.hide1 = false;
    } else {
      this.hide = false;
    }
    console.log(this.hide);
  }


  countDown(): void {
    let padLeft = (n: any) => '00'.substring(0, '00'.length - n.length) + n;
    let interval = setInterval(() => {
      this.minutes = this.date.getMinutes() + '';
      this.seconds = padLeft(this.date.getSeconds() + '');
      this.date = new Date(this.date.getTime() - 1000);
      if (this.minutes === '0' && this.seconds === '00') {
        let params: DialogParams = {
          success: false,
          confirmText: 'a tu número de celular: ********39 o al correo electrónico: *****vp@gmail.com'
        };
        this.dialogService.openConfirmDialog(params);
        clearInterval(interval);
        this.date = new Date('2020-01-01 00:01');
      }
      if (this.router.url !== '/recover') {
        clearInterval(interval);
      }
    }, 1000);
  }
}
