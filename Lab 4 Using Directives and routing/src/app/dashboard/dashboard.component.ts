import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;
  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Joshua', lastName: 'Limiac', email: 'jsohua@gmail.com', role: 'Sttudent' },   
    { firstName: 'Renz', lastName: 'Vitug', email: 'renz@gmail.com', role: 'student' }, 
    { firstName: 'Rymbrent', lastName: 'Rabano', email: 'rymbrent@gmail.com', role: 'Admin' }, 
    { firstName: 'louis', lastName: 'Garcia', email: 'lou@gmai.com', role: 'studend' }, 
    { firstName: 'Joshua', lastName: 'Macam', email: 'macam@gmail.com', role: 'student' } 
    ];
}
