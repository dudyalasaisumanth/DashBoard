import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  myControl = new FormControl();
  bool:boolean;
  options: string[] = ["Syam","Srikanth","Sruthi","Sweatha","Surya","Jayasree","Kalyan",""];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  constructor(private router:Router){

  }
  private _filter(value: string): string[] {
    // console.log(value)
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  public searchingMethod(){
    console.log(this.myControl.value)
    if(this.options.includes(this.myControl.value)){
      console.log("true")
      this.bool=true;
      this.router.navigate(['ManagerDetails', {"managerName": this.myControl.value }]);
    }
  }

}
