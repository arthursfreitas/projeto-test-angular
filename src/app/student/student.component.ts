import { Component, Input, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student?: Student;

  constructor() {
  }

  ngOnInit(): void {
  }
  clicked(){
    console.log(`Student ${this.student?.name}`);
  }

}
