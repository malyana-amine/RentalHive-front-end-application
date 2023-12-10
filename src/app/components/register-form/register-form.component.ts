import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegistrationComponent {
  user: User = new User();

  constructor(private userService: UserService) {}

  register(form: NgForm) {
    if (form.valid) {
      
      this.user.role = { id: 1, name: 'admin' };

      this.userService.registerUser(this.user).subscribe(
        response => {
          console.log('User registered successfully', response);
          form.resetForm();
        },
        error => {
          console.error('Error registering user', error);
          // Log the detailed error message from the server
          if (error instanceof HttpErrorResponse) {
            console.error('Server error:', error.error);
          }
        }
      );
      
    }
  }
}
