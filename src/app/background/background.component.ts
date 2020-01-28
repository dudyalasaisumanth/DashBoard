import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../file-service.service';
export interface data{
  name:string;
  data:string[];
}
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
dataLocal:any[];
name:string;
successbool:boolean
allowBool:boolean=true;
usersexist:string[]=[]
arrayData:any[];
data=[{ 
  name: "sai",
  data: ["ads","dasds"]
  // Tom: { age: 21, salary:5000}
}]
  ngOnInit() {
    // Object.keys(this.dataLocal).map(key => ({type: key, value: this.dataLocal[key]}));
    // console.log(this.data)
    // console.log(Object.keys(this.data).map(key => ({type: key, value: this.data[key]})));
    // var data1=Object.keys(this.data).map(key => ({type: key, value: this.data[key]}))
    // console.log(data1)
    this.dataLocal=JSON.parse(localStorage.getItem("listOfMembers"))
    console.log(this.dataLocal  )
    this.name=localStorage.getItem("Name")
    // console.log(this.name);
    // console.log(this.dataLocal[0].user);
    
    // console.log(this.usersexist)
    
    // if(this.usersexist.includes(this.name)){
    //   this.allowBool=false
    // }
    // else{
      // this.allowBool=true
      // console.log(this.dataLocal[0].user)
      if(this.dataLocal!=null){
        for(let i=0;i<this.dataLocal.length;i++){
          // console.log(this.dataLocal)
          this.usersexist.push(this.dataLocal[i].user)
        }
        if(this.usersexist.includes(this.name)){
          this.allowBool=false
        }
        else{
          this.allowBool=true
          console.log(this.dataLocal)
          // this.arrayData = Object.keys(this.dataLocal).map(key => ({type: key, value: this.dataLocal[key]}));

        }
          //  this.allowBool=false
          
         }

    // }
    // if(this.dataLocal!=null){
    //   this.allowBool=false
    //   this.arrayData = Object.keys(this.dataLocal).map(key => ({type: key, value: this.dataLocal[key]}));
    // }
    // if(this.dataLocal)
    // console.log(this.dataLocal)
    
    
    // console.log(localStorage.getItem("listOfMembers"))
  }
   k={"filedata":"","filename":""}
   list:any[]=[]

sellersPermitFile: any;
sellersPermitString: string;
currentId: number = 0;
constructor(private service:FileServiceService){}
public picked(event,count) {
  // console.log(count)
  this.k={"filedata":"","filename":""}
  // this.currentId = field;
  let fileList: FileList = event.target.files;

  this.k['filename']=fileList[0].name
  // if (fileList.length > 0) {
    const file: File = fileList[0];
    this.sellersPermitFile = file;
    this.handleInputChange(file); //turn into base64
  // }
  // else {
  //   alert("No file selected");
  // }

}
handleInputChange(files) {
  var file = files;
  // var pattern = /image-*/;
  var reader = new FileReader();
  // if (!file.type.match(pattern)) {
  //   alert('invalid format');
  //   return;
  // }
  reader.onloadend = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  let reader = e.target;
  var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
  //this.imageSrc = base64result;
  this.sellersPermitString = base64result;
  this.k['filedata']=this.sellersPermitString;
  // console.log('1', this.k);
  this.list.push(this.k)
  // console.log(this.list);
}


triggerer(){
  this.successbool=true;
  if(this.dataLocal==null){
    this.dataLocal=[{"user":localStorage.getItem("Name"),"data":this.list}]
    localStorage.setItem("listOfMembers",JSON.stringify(this.dataLocal))
  }
  else{
    // console.log(this.dataLocal)
    localStorage.removeItem("listOfMembers")
    this.dataLocal.push({"user":localStorage.getItem("Name"),"data":this.list})
    localStorage.setItem("listOfMembers",JSON.stringify(this.dataLocal))
  }
// this.arrayData.push({"user":localStorage.getItem("Name"),"data":this.list})
// console.log( localStorage.getItem("listOfMembers"))
  // localStorage.setItem("listOfMembers",JSON.stringify({"user":localStorage.getItem("Name"),"data":this.list}))
  // this.service.TriggerMail(this.list)
}
}