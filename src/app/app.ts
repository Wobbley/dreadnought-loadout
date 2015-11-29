import {Component, bootstrap,
  FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

class Ship {
  id: number;
  name: string;
  class: string;
  weight: string;
  icon_uri: string;
}

enum WEAPONS {
  PRIMARY,
  SECONDARY,
}

class Weapon {
  id: number;
  name: string;
  slot: WEAPONS;
  icon_uri: string;
}

enum ABILITY {
  PRIMARY,
  SECONDARY,
  PERIMETER,
  INTERNAL,
}

class Ability {
  id: number;
  name: string;
  slot: ABILITY;
  icon_uri: string;
}

let SHIPS: Ship[] = [
  { "id": 1, "name": "Fulgora", "class": "Corvette", "weight":"Medium", "icon_uri": "temp/fulgora.png"},
  { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight":"Medium", "icon_uri": "temp/zmey.png"},
  { "id": 1, "name": "Nox", "class": "Artillery", "weight":"Medium", "icon_uri": "temp/nox.png"},
];

let AWEAPONS: Weapon[] = [
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/secondary-weapon.png"},
];

let AABILITY: Ability[] = [
  {"id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": ABILITY.PRIMARY, "icon_uri": "temp/primary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": ABILITY.SECONDARY, "icon_uri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": ABILITY.INTERNAL, "icon_uri": "temp/internal-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": ABILITY.PERIMETER, "icon_uri": "temp/perimeter-ability.png"},
]

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'templates/loadout.html',
    styleUrls: ['css/default.css']
})

class LoadoutComponent {
  private selectedShip: Ship = {"id": 0, "name": "Ship", "class": "none", "weight": "None", "icon_uri": "temp/logo.png"};
  private selectedWeapons: Weapon[] = [
    {"id": 1, "name": "Primary", "slot": WEAPONS.PRIMARY, "icon_uri": "temp/logo.png"},
    {"id": 1, "name": "Secondary", "slot": WEAPONS.SECONDARY, "icon_uri": "temp/logo.png"}
  ];
  private ships = SHIPS;
  private weapons: Weapon[];
  private currentLoadoutElement;
  private infoVisible = false;

  selectPart(part: string) {
    this.currentLoadoutElement = part;
  }

  showInfo() {
    this.infoVisible = true;
  }

  hideInfo() {
    this.infoVisible = false;
  }
  
  getWeaponSlot(slot: string) {
    let weaponType: WEAPONS = WEAPONS[slot];
    let correctWeapons: Weapon[]= []
    for (let weapon of AWEAPONS) {
      if(weapon.slot == weaponType) {
        correctWeapons.push(weapon)
      }
    }
    this.weapons = correctWeapons;
    this.currentLoadoutElement = "weapon";
  }
  
  getModule(slot: string) {
    
  }
  
  selectShip(ship: Ship) {
    this.selectedShip = ship;
    this.currentLoadoutElement = null;
  }
  
  selectWeapon(weapon: Weapon) {
    this.selectedWeapons[weapon.slot] = weapon;
    this.currentLoadoutElement = null;
  }

}

bootstrap(LoadoutComponent);
