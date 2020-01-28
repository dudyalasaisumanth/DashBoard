import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer) { }
  list:any;
  arrayData:any
  ngOnInit() {
    this.list=localStorage.getItem("listOfMembers")
    this.list=JSON.parse(this.list)
    
    this.arrayData = Object.keys(this.list).map(key => ({user: this.list[key].user, data: this.list[key].data}));
    console.log(this.arrayData)
    //  const imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.arrayData[1].value.filedata);
    //  console.log(imagePath)
  }
  showPdf(data) {
    console.log(data)
    const linkSource = 'data:application/pdf;base64,' + data.filedata;
    const downloadLink = document.createElement("a");
    // const fileName = "sample.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = data.filename;
    downloadLink.click();
}
approveMethod(data){
  console.log(data)
}

}
