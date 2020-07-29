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

	 //metodo buscar por id
	 getFavorito(id: String){
	 	return this._http.get(this.url+'favorito/'+id).map(res=> res.json());
	 }


	 //metodo addFavorito
	 addFavorito(favorito: Favorito){
	 	let json = JSON.stringify(favorito);
	 	let params = json;
	 	let headers = new Headers({'Content-Type':'application/json'});

return this._http.post(this.url+'favorito',params,
	{headers:headers}).map(res=>res.json());

	 }

	 //metodo editar
	 editFavorito(id:String, favorito:Favorito){
	 	let json= JSON.stringify(favorito);
	 	let params = json;
	 	let headers = new Headers({'Content-Type':'application/json'});

return this._http.put(this.url+'favorito/'+id,params,
	{headers:headers}).map(res=>res.json());
	 
	 }

	 //metodo borrar
deleteFavorito(id:String){
	return this._http.delete(this.url+'favorito/'+id).map(res=> res.json());
}

}