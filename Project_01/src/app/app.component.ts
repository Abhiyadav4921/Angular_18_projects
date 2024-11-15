import { Component } from '@angular/core';

import { Test1Component } from "./my component/test1/test1.component";
import { Test2Component } from './my component/test2/test2.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet,Test1Component,Test2Component,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_01';
}
