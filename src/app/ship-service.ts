import {Http, Response, Request} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {Ship} from './ship';
import {Weapon} from './weapon'
import {Ability} from './ability'
import {Perk} from './perk'

@Injectable()
export class ShipService {
	
	constructor(public http: Http) {
		console.log('Ship service created', http);
	}
	
	getShips() {
    	return this.http.get('http://localhost:4000/api/ships')
    	.map( (responseData) => {
      		return responseData.json().data;
    	})
		.map((ships: Array<any>) => {
			let result: Array<Ship> = [];
			if (ships) {
				ships.forEach((ship) => {
					result.push(new Ship(ship.id, ship.name, ship.icon_uri))
				});
			}
			return result;
		});
	}
	
	getWeapons(shipName : string) {
		return this.http.get('http://localhost:4000/api/ships/weapons/' + shipName)
		.map( (responseData) => {
			return responseData.json().data;
		})
		.map((weapons: Array<any>) => {
			let result: Array<Weapon> = [];
			if (weapons) {
				weapons.forEach((weapon) => {
					result.push(new Weapon(weapon.id, weapon.name, weapon.slot, weapon.icon_uri))
				});
			}
			return result;
		});
	}
	
	getAbilities(shipName: string) {
		return this.http.get('http://localhost:4000/api/ships/abilities/' + shipName)
		.map((responseData) => {
			return responseData.json().data;
		})
		.map((abilities: Array<any>) => {
			let result: Array<Ability> = [];
			if (abilities) {
				abilities.forEach((ability) => {
					result.push(new Ability(ability.id, ability.name, ability.slot, ability.icon_uri))
				});
			}
			return result;
		});
	}
	
	getPerks(shipName: string) {
		return this.http.get('http://localhost:4000/api/ships/perks/' + shipName)
		.map((responseData) => {
			return responseData.json().data;
		})
		.map((perks: Array<any>) => {
			let result: Array<Perk> = [];
			if (perks) {
				perks.forEach((perk) => {
					result.push(new Perk(perk.id, perk.name, perk.slot, perk.icon_uri))
				});
			}
			return result;
		});
	}
}