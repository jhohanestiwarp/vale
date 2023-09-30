import { Component } from '@angular/core';
import { environment } from 'projects/authorizer/src/environments/environment';


@Component({
  selector: 'app-generatecode',
  templateUrl: './generatecode.component.html',
  styleUrls: ['./generatecode.component.scss']
})
export class GeneratecodeComponent {
  keyCaptcha = environment.kaptchaApiKey;
  submitted = false;
  captcha = "";
  hide = true;
  hide1 = true;


  constructor(

  ) {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
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
}
