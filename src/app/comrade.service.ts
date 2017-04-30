import { Injectable } from '@angular/core';
import { Comrade } from './comrade'
import { COMRADES } from './mock-comrades';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComradeService{
  constructor(public http: Http){}
  getComrades(sheetID): Promise<Comrade[]> {
    return Promise.resolve(COMRADES);
  }
  data: any = null;
  loadComrades(sheetID): Promise<Comrade[]> {
    var url = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/od6/public/values?alt=json";
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
            this.data = data.feed.entry;

            let returnArray: Array<any> = [];

            if(this.data && this.data.length > 0){
              this.data.forEach( (entry, index ) => {
                var obj = {};
                for(let x in entry){
                  if(x.includes('gsx$') && entry[x].$t){
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }
                returnArray.push(obj);
              });
            }
            resolve(returnArray);
        })
    });
  }
}
