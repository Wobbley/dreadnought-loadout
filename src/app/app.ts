import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Ship} from './ship';
import {Weapon} from './weapon';
import {WeaponType} from './weapon-type';
import {Ability} from './ability';
import {AbilityType} from './ability-type'
import {Perk} from './perk';
import {PerkType} from './perk-type';
import {SHIPS, APERKS, AWEAPONS, AABILITY} from './sample-data';

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'templates/loadout.html',
    styleUrls: ['css/default.css']
})
class LoadoutComponent {
  private selectedShip: Ship = {"id": null, "name": null, "iconUri": "temp/logo.png"};
  private selectedWeapons: Weapon[] = [
    {"id": 1, "name": "Primary", "slot": WeaponType.PRIMARY, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Secondary", "slot": WeaponType.SECONDARY, "iconUri": "temp/logo.png"}
  ];
  private selectedAbilities: Ability[] = [
    {"id": 1, "name": "Main Module", "slot": AbilityType.PRIMARY, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Secondary Module", "slot": AbilityType.SECONDARY, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Perimeter Module", "slot": AbilityType.PERIMETER, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Internal Module", "slot": AbilityType.INTERNAL, "iconUri": "temp/logo.png"},
    
  ];
  private selectedPerks: Perk[] = [
    {"id": 1, "name": "Communications", "slot": PerkType.COMMUNICATIONS, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Navigation", "slot": PerkType.NAVIGATION, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Engineering", "slot": PerkType.ENGINEERING, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Weapons", "slot": PerkType.WEAPONS, "iconUri": "temp/logo.png"},
  ];
  private ships = SHIPS;
  private weapons: Weapon[];
  private abilities: Ability[];
  private perks: Perk[];
  private currentLoadoutElement;
  private infoVisible = false;

  selectPart(part: string) {
    this.currentLoadoutElement = part;
  }
  
  shipSelected() {
    return this.selectedShip.id != null;
  }

  showInfo() {
    this.infoVisible = true;
  }

  hideInfo() {
    this.infoVisible = false;
  }
  
  getWeaponSlot(slot: string) {
    let weaponType: WeaponType = WeaponType[slot];
    let correctWeapons: Weapon[]= []
    for (let weapon of AWEAPONS) {
      if (weapon.slot == weaponType) {
        correctWeapons.push(weapon)
      }
    }
    this.weapons = correctWeapons;
    this.currentLoadoutElement = "weapon";
  }
  
  getAbility(slot: string) {
    let abilityType: AbilityType = AbilityType[slot];
    let correctAbilities: Ability[] = []
    for (let ability of AABILITY) {
      if (ability.slot == abilityType) {
        correctAbilities.push(ability);
      }
    }
    this.abilities = correctAbilities;
    this.currentLoadoutElement = "ability";
  }
  
  getPerk(slot: string) {
    let perkType: PerkType = PerkType[slot];
    let correctPerks: Perk[] = []
    for (let perk of APERKS) {
      if (perk.slot == perkType) {
        correctPerks.push(perk);
      }
    }
    this.perks = correctPerks;
    this.currentLoadoutElement = "perk"
  }
  
  selectAbility(ability: Ability) {
    this.selectedAbilities[ability.slot] = ability;
    this.currentLoadoutElement = null;
  }
  
  selectShip(ship: Ship) {
    this.selectedShip = ship;
    this.currentLoadoutElement = null;
  }
  
  selectWeapon(weapon: Weapon) {
    this.selectedWeapons[weapon.slot] = weapon;
    this.currentLoadoutElement = null;
  }
  
  selectPerk(perk: Perk) {
    this.selectedPerks[perk.slot] = perk;
    this.currentLoadoutElement = null;
  }

}

bootstrap(LoadoutComponent);
