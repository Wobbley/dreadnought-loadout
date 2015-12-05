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
var tooltip_1 = require('./tooltip');
var Ship = (function () {
    function Ship() {
    }
    return Ship;
})();
var WEAPONTYPE;
(function (WEAPONTYPE) {
    WEAPONTYPE[WEAPONTYPE["PRIMARY"] = 0] = "PRIMARY";
    WEAPONTYPE[WEAPONTYPE["SECONDARY"] = 1] = "SECONDARY";
})(WEAPONTYPE || (WEAPONTYPE = {}));
var Weapon = (function () {
    function Weapon() {
    }
    return Weapon;
})();
var ABILITYTYPE;
(function (ABILITYTYPE) {
    ABILITYTYPE[ABILITYTYPE["PRIMARY"] = 0] = "PRIMARY";
    ABILITYTYPE[ABILITYTYPE["SECONDARY"] = 1] = "SECONDARY";
    ABILITYTYPE[ABILITYTYPE["PERIMETER"] = 2] = "PERIMETER";
    ABILITYTYPE[ABILITYTYPE["INTERNAL"] = 3] = "INTERNAL";
})(ABILITYTYPE || (ABILITYTYPE = {}));
var Ability = (function () {
    function Ability() {
    }
    return Ability;
})();
var PERKTYPE;
(function (PERKTYPE) {
    PERKTYPE[PERKTYPE["COMMUNICATIONS"] = 0] = "COMMUNICATIONS";
    PERKTYPE[PERKTYPE["NAVIGATION"] = 1] = "NAVIGATION";
    PERKTYPE[PERKTYPE["ENGINEERING"] = 2] = "ENGINEERING";
    PERKTYPE[PERKTYPE["WEAPONS"] = 3] = "WEAPONS";
})(PERKTYPE || (PERKTYPE = {}));
var Perk = (function () {
    function Perk() {
    }
    return Perk;
})();
var SHIPS = [
    { "id": 1, "name": "Fulgora", "class": "Corvette", "weight": "Medium", "icon_uri": "temp/fulgora.png" },
    { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight": "Medium", "icon_uri": "temp/zmey.png" },
    { "id": 1, "name": "Nox", "class": "Artillery", "weight": "Medium", "icon_uri": "temp/nox.png" },
];
var AWEAPONS = [
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
    { "id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png" },
];
var AABILITY = [
    { "id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
    { "id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png" },
];
var APERKS = [
    { "id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png" },
    { "id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png" },
    { "id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png" },
    { "id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png" },
    { "id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png" },
    { "id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png" },
    { "id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png" },
    { "id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png" },
    { "id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png" },
    { "id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png" },
    { "id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png" },
    { "id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png" },
];
var LoadoutComponent = (function () {
    function LoadoutComponent() {
        this.selectedShip = { "id": null, "name": null, "class": null, "weight": null, "icon_uri": "temp/logo.png" };
        this.selectedWeapons = [
            { "id": 1, "name": "Primary", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Secondary", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/logo.png" }
        ];
        this.selectedAbilities = [
            { "id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/logo.png" },
        ];
        this.selectedPerks = [
            { "id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/logo.png" },
            { "id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/logo.png" },
        ];
        this.ships = SHIPS;
        this.infoVisible = false;
    }
    LoadoutComponent.prototype.selectPart = function (part) {
        this.currentLoadoutElement = part;
    };
    LoadoutComponent.prototype.shipSelected = function () {
        return this.selectedShip.id != null;
    };
    LoadoutComponent.prototype.showInfo = function () {
        this.infoVisible = true;
    };
    LoadoutComponent.prototype.hideInfo = function () {
        this.infoVisible = false;
    };
    LoadoutComponent.prototype.getWeaponSlot = function (slot) {
        var weaponType = WEAPONTYPE[slot];
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
    LoadoutComponent.prototype.getAbility = function (slot) {
        var abilityType = ABILITYTYPE[slot];
        var correctAbilities = [];
        for (var _i = 0; _i < AABILITY.length; _i++) {
            var ability = AABILITY[_i];
            if (ability.slot == abilityType) {
                correctAbilities.push(ability);
            }
        }
        this.abilities = correctAbilities;
        this.currentLoadoutElement = "ability";
    };
    LoadoutComponent.prototype.getPerk = function (slot) {
        var perkType = PERKTYPE[slot];
        var correctPerks = [];
        for (var _i = 0; _i < APERKS.length; _i++) {
            var perk = APERKS[_i];
            if (perk.slot == perkType) {
                correctPerks.push(perk);
            }
        }
        this.perks = correctPerks;
        this.currentLoadoutElement = "perk";
    };
    LoadoutComponent.prototype.selectAbility = function (ability) {
        this.selectedAbilities[ability.slot] = ability;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent.prototype.selectShip = function (ship) {
        this.selectedShip = ship;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent.prototype.selectWeapon = function (weapon) {
        this.selectedWeapons[weapon.slot] = weapon;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent.prototype.selectPerk = function (perk) {
        this.selectedPerks[perk.slot] = perk;
        this.currentLoadoutElement = null;
    };
    LoadoutComponent = __decorate([
        angular2_1.Component({
            selector: 'dreadnought-loadout',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, tooltip_1.Tooltip],
            templateUrl: 'templates/loadout.html',
            styleUrls: ['css/default.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoadoutComponent);
    return LoadoutComponent;
})();
angular2_1.bootstrap(LoadoutComponent);
//# sourceMappingURL=app.js.map