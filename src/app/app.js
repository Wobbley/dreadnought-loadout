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
var WEAPONS;
(function (WEAPONS) {
    WEAPONS[WEAPONS["PRIMARY"] = 0] = "PRIMARY";
    WEAPONS[WEAPONS["SECONDARY"] = 1] = "SECONDARY";
})(WEAPONS || (WEAPONS = {}));
var Weapon = (function () {
    function Weapon() {
    }
    return Weapon;
})();
var ABILITY;
(function (ABILITY) {
    ABILITY[ABILITY["PRIMARY"] = 0] = "PRIMARY";
    ABILITY[ABILITY["SECONDARY"] = 1] = "SECONDARY";
    ABILITY[ABILITY["PERIMETER"] = 2] = "PERIMETER";
    ABILITY[ABILITY["INTERNAL"] = 3] = "INTERNAL";
})(ABILITY || (ABILITY = {}));
var Ability = (function () {
    function Ability() {
    }
    return Ability;
})();
var SHIPS = [
    { "id": 1, "name": "Fulgora", "class": "Corvette", "weight": "Medium", "icon_uri": "temp/fulgora.png" },
    { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight": "Medium", "icon_uri": "temp/zmey.png" },
    { "id": 1, "name": "Nox", "class": "Artillery", "weight": "Medium", "icon_uri": "temp/nox.png" },
];
var AWEAPONS = [
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
];
var AABILITY = [
    { "id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
];
var LoadoutComponent = (function () {
    function LoadoutComponent() {
        this.selectedShip = { "id": 0, "name": "Ship", "class": "none", "weight": "None", "icon_uri": "temp/logo.png" };
        this.selectedWeapons = [
            { "id": 1, "name": "Primary", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Secondary", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/logo.png" }
        ];
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
    LoadoutComponent.prototype.getWeaponSlot = function (slot) {
        var weaponType = WEAPONS[slot];
        var correctWeapons = [];
        for (var _i = 0; _i < AWEAPONS.length; _i++) {
            var weapon = AWEAPONS[_i];
            if (weapon.slot == weaponType) {
                correctWeapons.push(weapon);
            }
        }
        this.weapons = correctWeapons;
        this.currentLoadoutElement = "weapon";
    };
    LoadoutComponent.prototype.getModule = function (slot) {
    };
    LoadoutComponent.prototype.selectShip = function (ship) {
        this.selectedShip = ship;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent.prototype.selectWeapon = function (weapon) {
        this.selectedWeapons[weapon.slot] = weapon;
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