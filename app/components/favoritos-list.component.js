"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var favorito_services_1 = require('../services/favorito.services');
var FavoritosListComponent = (function () {
    function FavoritosListComponent(_favoritoService) {
        this._favoritoService = _favoritoService;
        this.title = 'listado de favoritos';
    }
    FavoritosListComponent.prototype.ngOnInit = function () {
        console.log('FavoritosListComponent cargado!!');
        this.getFavoritos();
    };
    FavoritosListComponent.prototype.getFavoritos = function () {
        var _this = this;
        this._favoritoService.getFavoritos().subscribe(function (result) {
            console.log(result);
            _this.favoritos = result.favoritos;
            if (!_this.favoritos) {
                alert('Error en el servidor');
            }
            else {
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    FavoritosListComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    FavoritosListComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    FavoritosListComponent.prototype.onBorrarFavorito = function (id) {
        var _this = this;
        this._favoritoService.deleteFavorito(id).subscribe(function (result) {
            if (!result.message) {
                alert('Error en la petición');
            }
            _this.getFavoritos();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
    };
    FavoritosListComponent = __decorate([
        core_1.Component({
            selector: 'favoritos-list',
            templateUrl: 'app/views/favoritos-list.html',
            //inyección de depencia del objeto service hacia mi componente
            providers: [favorito_services_1.FavoritoService]
        }), 
        __metadata('design:paramtypes', [favorito_services_1.FavoritoService])
    ], FavoritosListComponent);
    return FavoritosListComponent;
}());
exports.FavoritosListComponent = FavoritosListComponent;
//# sourceMappingURL=favoritos-list.component.js.map