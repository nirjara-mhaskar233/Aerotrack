
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = '';
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  submit(): void {
    const { username, password } = this.form.value;
    if (!this.form.valid) return;

    const ok = this.auth.login(username!, password!);
    if (!ok) {
      this.error = 'Invalid credentials. Try admin/admin123, supervisor/sup123, or technician/tech123.';
    }
  }
}
