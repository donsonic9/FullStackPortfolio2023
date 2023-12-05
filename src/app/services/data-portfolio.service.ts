import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataPortfolioService {

  private ENjson = '../../assets/data/data-en.json';

  private ESjson = '../../assets/data/data-es.json';

  // language: string = '../../assets/data/data-en.json';

  constructor(private http:HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.http.get(this.ESjson);
  }

  public getData(): Observable<any> {
    return this.http.get(this.ENjson);
  }

}
