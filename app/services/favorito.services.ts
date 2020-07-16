import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Favorito} from '../models/favorito';

@Injectable()
export class FavoritoService{
	public url: String; //conectar a mi api rest

	 constructor(private _http:Http){
	 	//port la api rest
	 	this.url = 'http://localhost:3678/api/';
	 }

	 //metodo para obtneer los datos desde la api

	 getFavoritos(){
	 	return this._http.get(this.url+'favoritostodos').map(res => res.json());
	 }



}