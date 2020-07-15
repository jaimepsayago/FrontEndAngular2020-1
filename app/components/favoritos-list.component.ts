import {Component} from '@angular/core';

@Component({
	selector:'favoritos-list',
	templateUrl:'app/views/favoritos-list.html'

})

export class FavoritosListComponent{
	public title:string;
	public favoritos: Array<string>;
	public favoritosVisibles: boolean;
	public color: string;

	constructor(){
		this.title='listado de favoritos';
		this.favoritos = ['desarrollo','basado','plataformas'];
		this.favoritosVisibles = true;

	}

	showFavoritos(){
		this.favoritosVisibles= true;
	}
	hideFavoritos(){
		this.favoritosVisibles=false;
	}

	changeColor(){
		//this.color="red";
		console.log(this.color);
	}
}