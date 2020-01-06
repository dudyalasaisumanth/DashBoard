// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   dummy=["Syam", "Naga","Ramya"]
//   dummy1=this.dummy
//   constructor() { }
//   manBoolean:boolean
//   backBoolean:boolean=false
//   materialNumbers:string[]
//   options1:string[]
//   ngOnInit() {
//   }
//   managerMethod(){
//     this.manBoolean=true;
//     this.backBoolean=false
//   }
//   backgroundMethod(){
//     this.backBoolean=true
//     this.manBoolean=false
//   }
  
  
//   onKey(value) { 
//     this.dummy=[]
//     for(let i of this.dummy1){
//       if(i.toLowerCase().startsWith(value.toLowerCase())){
//         this.dummy.push(i)
//       }
//     }
//     console.log(this.dummy)
//     }
// }

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
// @Component({
//   selector: 'autocomplete-filter-example',
//   templateUrl: 'autocomplete-filter-example.html',
//   styleUrls: ['autocomplete-filter-example.css'],
// })
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
