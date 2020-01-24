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
    console.log(this.list)
    this.arrayData = Object.keys(this.list).map(key => ({type: key, value: this.list[key]}));
    console.log(this.arrayData[1].value)
     const imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.arrayData[1].value.filedata);
     console.log(imagePath)
     this.showPdf()
  }
  showPdf() {
    console.log(this.arrayData[1].value[0].filedata)
    const linkSource = 'data:application/pdf;base64,' + this.arrayData[1].value[0].filedata;
    const downloadLink = document.createElement("a");
    const fileName = "sample.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

}
