System.register(['angular2/core', 'angular2/common', './weapon.type', './ability.type', './perk.type', './data.sample', './ship.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, weapon_type_1, ability_type_1, perk_type_1, data_sample_1, ship_service_1;
    var LoadoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (weapon_type_1_1) {
                weapon_type_1 = weapon_type_1_1;
            },
            function (ability_type_1_1) {
                ability_type_1 = ability_type_1_1;
            },
            function (perk_type_1_1) {
                perk_type_1 = perk_type_1_1;
            },
            function (data_sample_1_1) {
                data_sample_1 = data_sample_1_1;
            },
            function (ship_service_1_1) {
                ship_service_1 = ship_service_1_1;
            }],
        execute: function() {
            LoadoutComponent = (function () {
                function LoadoutComponent(shipService) {
                    this.shipService = shipService;
                    this.selectedShip = { "id": null, "name": null, "iconUri": "temp/logo.png" };
                    this.selectedWeapons = [
                        { "id": 1, "name": "Primary", "slot": weapon_type_1.WeaponType.PRIMARY, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Secondary", "slot": weapon_type_1.WeaponType.SECONDARY, "iconUri": "temp/logo.png" }
                    ];
                    this.selectedAbilities = [
                        { "id": 1, "name": "Main Module", "slot": ability_type_1.AbilityType.PRIMARY, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Secondary Module", "slot": ability_type_1.AbilityType.SECONDARY, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Perimeter Module", "slot": ability_type_1.AbilityType.PERIMETER, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Internal Module", "slot": ability_type_1.AbilityType.INTERNAL, "iconUri": "temp/logo.png" },
                    ];
                    this.selectedPerks = [
                        { "id": 1, "name": "Communications", "slot": perk_type_1.PerkType.COMMUNICATIONS, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Navigation", "slot": perk_type_1.PerkType.NAVIGATION, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Engineering", "slot": perk_type_1.PerkType.ENGINEERING, "iconUri": "temp/logo.png" },
                        { "id": 1, "name": "Weapons", "slot": perk_type_1.PerkType.WEAPONS, "iconUri": "temp/logo.png" },
                    ];
                    this.infoVisible = false;
                    this.getShips();
                }
                LoadoutComponent.prototype.getShips = function () {
                    var _this = this;
                    this.shipService.getShips()
                        .subscribe(function (apiShips) { return _this.ships = apiShips; }, function (error) { return _this.ships = data_sample_1.SHIPS; });
                };
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
                    var weaponType = weapon_type_1.WeaponType[slot];
                    var correctWeapons = [];
                    for (var _i = 0, _a = this.shipWeapons; _i < _a.length; _i++) {
                        var weapon = _a[_i];
                        if (weapon.slot == weaponType) {
                            correctWeapons.push(weapon);
                        }
                    }
                    this.slotWeapons = correctWeapons;
                    this.currentLoadoutElement = "weapon";
                };
                LoadoutComponent.prototype.getAbility = function (slot) {
                    var abilityType = ability_type_1.AbilityType[slot];
                    var correctAbilities = [];
                    for (var _i = 0, _a = this.shipAbilities; _i < _a.length; _i++) {
                        var ability = _a[_i];
                        if (ability.slot == abilityType) {
                            correctAbilities.push(ability);
                        }
                    }
                    this.slotAbilities = correctAbilities;
                    this.currentLoadoutElement = "ability";
                };
                LoadoutComponent.prototype.getPerk = function (slot) {
                    var perkType = perk_type_1.PerkType[slot];
                    var correctPerks = [];
                    for (var _i = 0, _a = this.shipPerks; _i < _a.length; _i++) {
                        var perk = _a[_i];
                        if (perk.slot == perkType) {
                            correctPerks.push(perk);
                        }
                    }
                    this.slotPerks = correctPerks;
                    this.currentLoadoutElement = "perk";
                };
                LoadoutComponent.prototype.selectAbility = function (ability) {
                    this.selectedAbilities[ability.slot] = ability;
                    this.currentLoadoutElement = null;
                };
                LoadoutComponent.prototype.selectShip = function (ship) {
                    this.selectedShip = ship;
                    this.getWeaponsForShip(ship.name);
                    this.getAbilitiesForShip(ship.name);
                    this.getPerksForShip(ship.name);
                    this.currentLoadoutElement = null;
                };
                LoadoutComponent.prototype.getWeaponsForShip = function (shipName) {
                    var _this = this;
                    this.shipService.getWeapons(shipName)
                        .subscribe(function (apiWeapons) { return _this.shipWeapons = apiWeapons; }, function (error) { return _this.shipWeapons = data_sample_1.AWEAPONS; });
                };
                LoadoutComponent.prototype.getAbilitiesForShip = function (shipName) {
                    var _this = this;
                    this.shipService.getAbilities(shipName)
                        .subscribe(function (apiAbilities) { return _this.shipAbilities = apiAbilities; }, function (error) { return _this.shipAbilities = data_sample_1.AABILITY; });
                };
                LoadoutComponent.prototype.getPerksForShip = function (shipName) {
                    var _this = this;
                    this.shipService.getPerks(shipName)
                        .subscribe(function (apiPerks) { return _this.shipPerks = apiPerks; }, function (error) { return _this.shipPerks = data_sample_1.APERKS; });
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
                    core_1.Component({
                        selector: 'dreadnought-loadout',
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        templateUrl: 'app/loadout.html',
                        styleUrls: ['default.css'],
                        providers: [ship_service_1.ShipService]
                    }), 
                    __metadata('design:paramtypes', [ship_service_1.ShipService])
                ], LoadoutComponent);
                return LoadoutComponent;
            })();
            exports_1("LoadoutComponent", LoadoutComponent);
        }
    }
});
//# sourceMappingURL=loadout.component.js.map