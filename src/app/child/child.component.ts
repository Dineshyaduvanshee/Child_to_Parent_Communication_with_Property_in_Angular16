import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  outputs: ['childevent']
})
export class ChildComponent implements OnInit{
  childevent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onchange(val : any){
   // console.log(val);
    this.childevent.emit(val);
  }

}
