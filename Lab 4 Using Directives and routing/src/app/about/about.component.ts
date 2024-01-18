import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = "Rymbrent Rabano"
  position = "Student"
  work_experience= "2 month"
  email="rlrabano@gmail.com"
  website= "www.sicawrldwide.com"
  phone= "09685800111"

  imageUrl:string="assets/logo.png.jpg";
  imageW: number =110;
  imageH: number =100;
}
