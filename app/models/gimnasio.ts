export class Gimnasio{

	constructor(
		public _id:string,
		public idCliente:string,
		public fechaAlta: Date,
		public preferencias: Array<string>
		//public preferencias:any = {}


		){
		
	}

}