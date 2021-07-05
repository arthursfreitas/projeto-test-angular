import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  students: Student[] = [
    { name: 'Arthur', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han', isJedi: false },
  ];
}
