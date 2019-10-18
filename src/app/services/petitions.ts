import{Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class peticiones {
	public url:string;
	

	constructor (
		public _http:HttpClient
		)
	{
		this.url = 'http://localhost:3700';
		
		
	}
	

	// getOne(oneUser):Observable<any>{
	// 	let headers = new HttpHeaders().set('Content-Type','application/json');
	// 	return this._http.get(this.url+'/getOne?userName='+oneUser.userName,{headers:headers});
	// }

	getUser():Observable<any>{
		return this._http.get(this.url+'/get');
	}

	addUser1(usuario):Observable<any>{
		let json=JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'/create',json,{headers:headers});
	}


	deleteUser1(userToDelete):Observable<any>{
		
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'/delete?id='+userToDelete.id,{headers:headers});
	}

	updateUser1(updateUser):Observable<any>{

		let json=JSON.stringify(updateUser);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		//return this._http.delete(this.url+'/put?userName='+updateUser.userName+'&age='+updateUser.age+'&jobTitle='+updateUser.jobTitle, json, {headers:headers});
		return this._http.put(this.url+'/put', json, {headers:headers});
	}
}