import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Well } from "./well";


@Injectable({providedIn:'root'})
export class POC2Service {

    constructor(private _http: HttpClient){}

    public getWellsList(): Observable<Well[]> {
        return this._http.get<Well[]>('../../assets/wells.json');
    }
}