import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {


    constructor(public http: Http) {}
    
    /**
     * created by   : Lionel C. 
     * date         : 19/02/2017
     * description  : getUsers method is used to return a json object with users from jsonplaceholder web site 
     */
    getUsers()
    {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
        .map(res => res.json());
    }
    
}
