import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../file-service.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(private fileService: FileServiceService) { }

  ngOnInit() {
  }
  download() {
    this.fileService.downloadFile().subscribe(response => {
			let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			const url= window.URL.createObjectURL(blob);
      window.open(url);
      console.log(response.url)
			window.location.href = response.url;
			// fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
  f1() {
    window.open('../assets/datestimes.pdf', '_blank');
}
}
