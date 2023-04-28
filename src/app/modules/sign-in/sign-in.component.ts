import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get signInStatus() {
    return this.authService.signInStatus;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async submitForm() {
    if (this.signInForm.valid) {
      this.signInForm.disable();
      try {
        const credentials = this.signInForm.value;
        const success = await this.authService.signIn(credentials);
        if (success) {
          await this.router.navigate(['/dashboard']);
        }
      } finally {
        this.signInForm.enable();
      }
    } else {
      Object.values(this.signInForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
