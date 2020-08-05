import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.services';
import {Favorito} from '../models/favorito';

@Component({
	selector:'favoritos-list',
	templateUrl:'app/views/favoritos-list.html',
	//inyección de depencia del objeto service hacia mi componente
	providers:[FavoritoService]

})

export class FavoritosListComponent{
	public title:string;
	public errorMessage;
	public favoritos: Favorito[];
	public confirmado;

	constructor( private _favoritoService:FavoritoService){
		this.title='listado de favoritos';
		
	}

	ngOnInit(){
		console.log('FavoritosListComponent cargado!!');
		this.getFavoritos();
	}

	getFavoritos(){
		this._favoritoService.getFavoritos().subscribe(
			result => {
				console.log(result);
				this.favoritos = result.favoritos;

				if(!this.favoritos){
					alert('Error en el servidor');
				}else{
					//this.loading = false;
				}

			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
	}

	onBorrarConfirm(id){
		this.confirmado = id;
	}

	onCancelarConfirm(id){
		this.confirmado = null;
	}

	onBorrarFavorito(id){
		this._favoritoService.deleteFavorito(id).subscribe(
			result => {
				if(!result.message){
					alert('Error en la petición');
				}
				this.getFavoritos();
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
	}

}