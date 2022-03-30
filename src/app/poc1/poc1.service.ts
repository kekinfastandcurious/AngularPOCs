import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
// import data from './users.json';
// import { type } from "os";
import { HttpClient } from "@angular/common/http";



export type User = {
    name: string;
    age: number;
};

@Injectable({
    providedIn: "root"
})
export class POC1Service {

    public getUsers(): Observable<User[]>{
        return this._httpClient.get<User[]>('../assets/users.json');
    }

    constructor(private _httpClient: HttpClient){}
}