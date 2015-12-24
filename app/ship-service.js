System.register(['angular2/http', 'angular2/core', './ship', './weapon', './ability', './perk', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, ship_1, weapon_1, ability_1, perk_1;
    var ShipService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ship_1_1) {
                ship_1 = ship_1_1;
            },
            function (weapon_1_1) {
                weapon_1 = weapon_1_1;
            },
            function (ability_1_1) {
                ability_1 = ability_1_1;
            },
            function (perk_1_1) {
                perk_1 = perk_1_1;
            },
            function (_1) {}],
        execute: function() {
            ShipService = (function () {
                function ShipService(http) {
                    this.http = http;
                    console.log('Ship service created', http);
                }
                ShipService.prototype.getShips = function () {
                    return this.http.get('http://localhost:4000/api/ships')
                        .map(function (responseData) {
                        return responseData.json().data;
                    })
                        .map(function (ships) {
                        var result = [];
                        if (ships) {
                            ships.forEach(function (ship) {
                                result.push(new ship_1.Ship(ship.id, ship.name, ship.icon_uri));
                            });
                        }
                        return result;
                    });
                };
                ShipService.prototype.getWeapons = function (shipName) {
                    return this.http.get('http://localhost:4000/api/ships/weapons/' + shipName)
                        .map(function (responseData) {
                        return responseData.json().data;
                    })
                        .map(function (weapons) {
                        var result = [];
                        if (weapons) {
                            weapons.forEach(function (weapon) {
                                result.push(new weapon_1.Weapon(weapon.id, weapon.name, weapon.slot, weapon.icon_uri));
                            });
                        }
                        return result;
                    });
                };
                ShipService.prototype.getAbilities = function (shipName) {
                    return this.http.get('http://localhost:4000/api/ships/abilities/' + shipName)
                        .map(function (responseData) {
                        return responseData.json().data;
                    })
                        .map(function (abilities) {
                        var result = [];
                        if (abilities) {
                            abilities.forEach(function (ability) {
                                result.push(new ability_1.Ability(ability.id, ability.name, ability.slot, ability.icon_uri));
                            });
                        }
                        return result;
                    });
                };
                ShipService.prototype.getPerks = function (shipName) {
                    return this.http.get('http://localhost:4000/api/ships/perks/' + shipName)
                        .map(function (responseData) {
                        return responseData.json().data;
                    })
                        .map(function (perks) {
                        var result = [];
                        if (perks) {
                            perks.forEach(function (perk) {
                                result.push(new perk_1.Perk(perk.id, perk.name, perk.slot, perk.icon_uri));
                            });
                        }
                        return result;
                    });
                };
                ShipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ShipService);
                return ShipService;
            })();
            exports_1("ShipService", ShipService);
        }
    }
});
//# sourceMappingURL=ship-service.js.map