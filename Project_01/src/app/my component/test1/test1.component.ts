import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  loginData = { username: '', password: '' };
  onSubmit() {
    
    console.log('Login Data:', this.loginData);

    // Example: Simple validation
    if (this.loginData.username === 'admin' && this.loginData.password === 'admin') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  }
}
