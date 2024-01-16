import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Child_to_Parent_Communication_with_Property_in_Angular16';
  cdata : any;
  sdata: any;
  getData(val : any){
    this.cdata = val;
  }
  getStudentData(val : any){
    this.sdata = val;
  }
}
