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
  bool:boolean=true;
  options: string[] = ["SRIKANTH","KALYAN","PRADEEP","DEVARAJ","NAGARAJ","SYAM","JAYASREE"];
  projects:string[][]=[["Fiona","OSDM","CPR"],["H&M","GMO"],["HLM"],["CISCO","RLO"],["APPLE"],["MICROSOFT","PTO"],["WELLSFARGO","STP"]]
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      console.log(this.Activatedroute.snapshot.params["managerName"])
      if(this.Activatedroute.snapshot.params["managerName"]!=undefined){
        this.bool=false
      }
  }
  constructor(private router:Router,private Activatedroute:ActivatedRoute){

  }
  private _filter(value: string): string[] {
    // console.log(value)
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  public searchingMethod(){
    console.log("search")
    this.bool=false;
    console.log(this.myControl.value)
    if(this.options.includes(this.myControl.value)){
      console.log("true")
      this.bool=true;
      this.router.navigate(['ManagerDetails', {"managerName": this.myControl.value }]);
    }
  }

}
