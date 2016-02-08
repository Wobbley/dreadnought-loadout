import {Injectable} from 'angular2/core';
import Ship from './ship';
import Weapon from './weapon';
import WeaponType from './weapon.type';
import Ability from './ability';
import AbilityType from './ability.type';
import Perk from './perk';
import PerkType from './perk.type';

@Injectable()
export default class DefaultFactory {

    public getShip() {
        return new Ship(null, null, 'https://dreadnoughthangar.com/images/logo.png');
    }

    getWeapons() {
        return [
            new Weapon(null, 'Primary', 'Primary', 'https://dreadnoughthangar.com/images/logo.png'),
            new Weapon(null, 'Secondary', 'Secondary', 'https://dreadnoughthangar.com/images/logo.png')
        ];
    }

    getAbilities() {
        return [
            new Ability(null, 'Main Module', 'Primary', 'https://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Secondary Module', 'Secondary', 'https://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Perimeter Module', 'Perimeter', 'https://dreadnoughthangar.com/images/logo.png'),
            new Ability(null, 'Internal Module', 'Internal', 'https://dreadnoughthangar.com/images/logo.png'),
        ];
    }

    getPerks() {
        return [
            new Perk(null, 'Communications', 'Communications', 'https://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Navigation', 'Navigation', 'https://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Engineering', 'Engineering', 'https://dreadnoughthangar.com/images/logo.png'),
            new Perk(null, 'Weapons', 'Weapons', 'https://dreadnoughthangar.com/images/logo.png')
        ];
    }
}
