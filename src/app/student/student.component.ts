import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  outputs:['studentevent']
})
export class StudentComponent implements OnInit  {

constructor() {}
studentevent = new EventEmitter();
  ngOnInit(): void {
   
  }
sdata : any;
  getData(val : any){
    this.sdata = val;
  }
  onchange(val : any){
this.studentevent.emit(val);
  }

}
