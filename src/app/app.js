var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Ship = (function () {
    function Ship() {
    }
    return Ship;
})();
var SHIPS = [
    { "id": 1, "name": "Fulgora", "class": "Corvette", "weight": "Medium", "icon_uri": "temp/fulgora.png" },
    { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight": "Medium", "icon_uri": "temp/zmey.png" },
    { "id": 1, "name": "Nox", "class": "Artillery", "weight": "Medium", "icon_uri": "temp/nox.png" },
];
var LoadoutComponent = (function () {
    function LoadoutComponent() {
        this.selectedShip = { "id": 0, "name": "Select ship", "class": "none", "weight": "None", "icon_uri": "temp/logo.png" };
        this.ships = SHIPS;
        this.infoVisible = false;
    }
    LoadoutComponent.prototype.selectPart = function (part) {
        this.currentLoadoutElement = part;
    };
    LoadoutComponent.prototype.showInfo = function () {
        this.infoVisible = true;
    };
    LoadoutComponent.prototype.hideInfo = function () {
        this.infoVisible = false;
    };
    LoadoutComponent.prototype.selectShip = function (ship) {
        this.selectedShip = ship;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent = __decorate([
        angular2_1.Component({
            selector: 'dreadnought-loadout',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            templateUrl: 'templates/loadout.html',
            styleUrls: ['css/default.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoadoutComponent);
    return LoadoutComponent;
})();
angular2_1.bootstrap(LoadoutComponent);
//# sourceMappingURL=app.js.map