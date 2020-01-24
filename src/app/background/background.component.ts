import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../file-service.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
dataLocal:any;
name:string;
allowBool:boolean=true;
arrayData:any[]
  ngOnInit() {
    this.dataLocal=JSON.parse(localStorage.getItem("listOfMembers"))
    this.name=localStorage.getItem("Name")
    console.log(this.name);
    console.log(this.dataLocal);
    if(this.dataLocal!="null"){
      this.allowBool=false
    }
    // if(this.dataLocal)
    // console.log(this.dataLocal)
    
    this.arrayData = Object.keys(this.dataLocal).map(key => ({type: key, value: this.dataLocal[key]}));
    console.log(this.arrayData)
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
  
this.arrayData.push({"user":localStorage.getItem("Name"),"data":this.list})
console.log( this.arrayData)
  // localStorage.setItem("listOfMembers",JSON.stringify({"user":localStorage.getItem("Name"),"data":this.list}))
  this.service.TriggerMail(this.list)
}
}