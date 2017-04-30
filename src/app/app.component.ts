import { Component } from '@angular/core';
import { Comrade } from './comrade';
import { ComradeService } from './comrade.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComradeService]
})
export class AppComponent implements OnInit {
  constructor(private comradeService: ComradeService) {
    this.sheetID = "108T4Bs9MJfDCQAqFCFILal3E5MJT2sMRdlqslAbboaw";
  };
  sheetID = "";
  title = 'With Labour';
  comrades: Comrade[] = [];
  getComrades(): void {
    this.comradeService.loadComrades(this.sheetID).then(comrades => this.comrades = comrades);
  }
  ngOnInit(): void {
    console.log("Initing");
    this.getComrades();
  }
}
