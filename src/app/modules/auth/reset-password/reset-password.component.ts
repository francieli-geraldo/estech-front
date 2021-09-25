import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { first, map, switchMap } from 'rxjs/operators';
import { ConfirmPasswordValidator } from '..';
import { ActivatedRoute, Router } from '@angular/router';

enum ErrorStates {
  NotSubmitted,
  HasError,
  NoError,
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  errorState: ErrorStates = ErrorStates.NotSubmitted;
  errorStates = ErrorStates;
  isLoading$: Observable<boolean>;
  id: number;
  token: string;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoading$ = this.authService.isLoading$;
  }

  ngOnInit(): void {
    const sb = this.route.paramMap.pipe(
      map(params => {
        this.token = params.get('token');
        if (this.token) {
          this.id = Number(this.token.substring(32, this.token.length - 32));
          this.initForm();
        }else{
          return this.router.navigate(['auth/login'], { relativeTo: this.route });          
        }
      }),
    ).subscribe();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.resetPasswordForm.controls;
  }

  initForm() {
    this.resetPasswordForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],

      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      cPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    },{
        validator: ConfirmPasswordValidator.MatchPassword,
    });
  }

  submit() {
    this.errorState = ErrorStates.NotSubmitted;
    const resetPasswordSubscr = this.authService
      .resetPassword(this.token, this.id, this.f.password.value)
      .pipe(first())
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['auth/login/reset-success']);          
        } else {
          this.router.navigate(['auth/login/unauthorized']);                    
        }
      });
    this.unsubscribe.push(resetPasswordSubscr);
  }
}
