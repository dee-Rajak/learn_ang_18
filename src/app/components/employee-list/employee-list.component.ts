import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  // templateUrl: './employee-list.component.html',
  template: '<h1 class="text-primary">Hello from admin.</h1>',
  // styleUrl: './employee-list.component.css'
  styles: ['.primary{color: red}'],
})
export class EmployeeListComponent {

}
