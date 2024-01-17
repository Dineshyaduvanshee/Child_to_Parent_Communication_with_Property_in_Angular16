// import { NgIfContext } from '@angular/common';
// import { Component, TemplateRef } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {


//   title = 'Child_to_Parent_Communication_with_Property_in_Angular16';
//   cdata : any;
//   sdata: any;
//   isValid : boolean = true;


//   getData(val : any){
//     this.cdata = val;
//   }
//   getStudentData(val : any){
//     this.sdata = val;
//   }
//   changeValue(valid : boolean){
//     this.isValid = valid;
//   }
// }


import { NgIfContext } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Child_to_Parent_Communication_with_Property_in_Angular16';
  cdata: any;
  sdata: any;
  isValid: boolean = true;
  thenblock: TemplateRef<NgIfContext> | null = null;
  elseblock: TemplateRef<NgIfContext> | null = null;

  getData(val: any) {
    this.cdata = val;
  }

  getStudentData(val: any) {
    this.sdata = val;
  }

  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}
