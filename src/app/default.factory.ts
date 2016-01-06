//Bytt ut disse med export default
import {Injectable} from 'angular2/core';
import {Ship} from './ship';
import {Weapon} from './weapon';
import {WeaponType} from './weapon.type';
import {Ability} from './ability';
import {AbilityType} from './ability.type';
import {Perk} from './perk';
import {PerkType} from './perk.type';

@Injectable()
export default class DefaultFactory {

    public getShip() {
        return new Ship(null, null, 'http://dreadnoughthangar.com/images/logo.png');
    }

    getWeapons() {
        return [
            new Weapon(null, 'Primary', 'Primary', 'http://dreadnoughthangar.com/images/logo.png'),
            new Weapon(null, 'Secondary', 'Secondary', 'http://dreadnoughthangar.com/images/logo.png')
        ];
    }

    getAbilities() {
        return [
            new Ability(null, 'Main Module', 'Primary', 'http://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Secondary Module', 'Secondary', 'http://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Perimeter Module', 'Perimeter', 'http://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Internal Module', 'Internal', 'http://dreadnoughthangar.com/images/logo.png'),
        ];
    }

    getPerks() {
        return [
            new Perk(null, 'Communications', 'Communications', 'http://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Navigation', 'Navigation', 'http://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Engineering', 'Engineering', 'http://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Weapons', 'Weapons', 'http://dreadnoughthangar.com/images/logo.png')
        ];
    }
}
