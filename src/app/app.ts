import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Tooltip} from './tooltip';

class Ship {
  id: number;
  name: string;
  class: string;
  weight: string;
  icon_uri: string;
}

enum WEAPONTYPE {
  PRIMARY,
  SECONDARY,
}

class Weapon {
  id: number;
  name: string;
  slot: WEAPONTYPE;
  icon_uri: string;
}

enum ABILITYTYPE {
  PRIMARY,
  SECONDARY,
  PERIMETER,
  INTERNAL,
}

class Ability {
  id: number;
  name: string;
  slot: ABILITYTYPE;
  icon_uri: string;
}

enum PERKTYPE {
  COMMUNICATIONS,
  NAVIGATION,
  ENGINEERING,
  WEAPONS,
}

class Perk {
  id: number;
  name: string;
  slot: PERKTYPE;
  icon_uri: string;
}

let SHIPS: Ship[] = [
  { "id": 1, "name": "Fulgora", "class": "Corvette", "weight":"Medium", "icon_uri": "temp/fulgora.png"},
  { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight":"Medium", "icon_uri": "temp/zmey.png"},
  { "id": 1, "name": "Nox", "class": "Artillery", "weight":"Medium", "icon_uri": "temp/nox.png"},
];

let AWEAPONS: Weapon[] = [
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
];

let AABILITY: Ability[] = [
  {"id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
]

let APERKS: Perk[] = [
  {"id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/communications-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/weapons-perk.png"},
]

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, Tooltip],
    templateUrl: 'templates/loadout.html',
    styleUrls: ['css/default.css']
})
class LoadoutComponent {
  private selectedShip: Ship = {"id": null, "name": null, "class": null, "weight": null, "icon_uri": "temp/logo.png"};
  private selectedWeapons: Weapon[] = [
    {"id": 1, "name": "Primary", "slot": WEAPONTYPE.PRIMARY, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Secondary", "slot": WEAPONTYPE.SECONDARY, "icon_uri": "temp/logo.png"}
  ];
  private selectedAbilities: Ability[] = [
    {"id": 1, "name": "Main Module", "slot": ABILITYTYPE.PRIMARY, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Secondary Module", "slot": ABILITYTYPE.SECONDARY, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Perimeter Module", "slot": ABILITYTYPE.PERIMETER, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Internal Module", "slot": ABILITYTYPE.INTERNAL, "icon_uri": "temp/logo.png"},
    
  ];
  private selectedPerks: Perk[] = [
    {"id": 1, "name": "Communications", "slot": PERKTYPE.COMMUNICATIONS, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Navigation", "slot": PERKTYPE.NAVIGATION, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Engineering", "slot": PERKTYPE.ENGINEERING, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Weapons", "slot": PERKTYPE.WEAPONS, "icon_uri": "temp/logo.png"},
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
    let weaponType: WEAPONTYPE = WEAPONTYPE[slot];
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
    let abilityType: ABILITYTYPE = ABILITYTYPE[slot];
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
    let perkType: PERKTYPE = PERKTYPE[slot];
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
