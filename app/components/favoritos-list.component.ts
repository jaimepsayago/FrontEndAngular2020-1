import {Component} from '@angular/core';

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
	

	constructor( private _favoritoService:FavoritoService){
		this.title='listado de favoritos';
		
	}

	ngOnInit(){
		console.log('FavoritosListComponent cargado!');
		this._favoritoService.getFavoritos().subscribe(
			result=>{
				console.log(result);
				//cargar datos en el array
				this.favoritos = result.favoritos;
				if(!this.favoritos){
					alert('error');
				}
			},
			error =>{
				this.errorMessage = <any>error;
				if(this.errorMessage!=null){
					console.log(this.errorMessage);
					alert('error en la peticion');
				}
			}

			);
	}


}