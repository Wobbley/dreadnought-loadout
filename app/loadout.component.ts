import {Component,} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {Ship} from './ship';
import {Weapon} from './weapon';
import {WeaponType} from './weapon.type';
import {Ability} from './ability';
import {AbilityType} from './ability.type'
import {Perk} from './perk';
import {PerkType} from './perk.type';
import {SHIPS, APERKS, AWEAPONS, AABILITY} from './data.sample';
import {ShipService} from './ship.service';

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'app/loadout.html',
    styleUrls: ['default.css'],
    providers: [ShipService]
})
export class LoadoutComponent {
  private selectedShip: Ship = {"id": null, "name": null, "iconUri": "temp/logo.png"};
  private selectedWeapons: Weapon[] = [
    {"id": 1, "name": "Primary", "slot": WeaponType.Primary, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Secondary", "slot": WeaponType.Secondary, "iconUri": "temp/logo.png"}
  ];
  private selectedAbilities: Ability[] = [
    {"id": 1, "name": "Main Module", "slot": AbilityType.Primary, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Secondary Module", "slot": AbilityType.Secondary, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Perimeter Module", "slot": AbilityType.Perimeter, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Internal Module", "slot": AbilityType.Internal, "iconUri": "temp/logo.png"},
    
  ];
  private selectedPerks: Perk[] = [
    {"id": 1, "name": "Communications", "slot": PerkType.Communications, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Navigation", "slot": PerkType.Navigation, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Engineering", "slot": PerkType.Engineering, "iconUri": "temp/logo.png"},
    {"id": 1, "name": "Weapons", "slot": PerkType.Weapons, "iconUri": "temp/logo.png"},
  ];
  private ships: Array<Ship>;
  
  private shipWeapons: Weapon[];
  private slotWeapons: Weapon[];
  
  private shipAbilities: Ability[];
  private slotAbilities: Ability[];
  
  private shipPerks: Perk[];
  private slotPerks: Perk[];
  
  private currentLoadoutElement;
  private infoVisible = false;
  
  constructor(public shipService: ShipService) {
    this.getShips();
  }
  
  getShips() {
    this.shipService.getShips()
    .subscribe(
      apiShips => this.ships = apiShips,
      error => this.ships = SHIPS
    );
  }

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
    for (let weapon of this.shipWeapons) {
      if (weapon.slot == weaponType) {
        correctWeapons.push(weapon)
      }
    }
    this.slotWeapons = correctWeapons;
    this.currentLoadoutElement = "weapon";
  }
  
  getAbility(slot: string) {
    let abilityType: AbilityType = AbilityType[slot];
    let correctAbilities: Ability[] = []
    for (let ability of this.shipAbilities) {
      if (ability.slot == abilityType) {
        correctAbilities.push(ability);
      }
    }
    this.slotAbilities = correctAbilities;
    this.currentLoadoutElement = "ability";
  }
  
  getPerk(slot: string) {
    let perkType: PerkType = PerkType[slot];
    let correctPerks: Perk[] = []
    for (let perk of this.shipPerks) {
      if (perk.slot == perkType) {
        correctPerks.push(perk);
      }
    }
    this.slotPerks = correctPerks;
    this.currentLoadoutElement = "perk"
  }
  
  selectAbility(ability: Ability) {
    this.selectedAbilities[ability.slot] = ability;
    this.currentLoadoutElement = null;
  }
  
  selectShip(ship: Ship) {
    this.selectedShip = ship;
    this.getWeaponsForShip(ship.name);
    this.getAbilitiesForShip(ship.name);
    this.getPerksForShip(ship.name);
    this.currentLoadoutElement = null;
  }
  
  getWeaponsForShip(shipName: string) {
    this.shipService.getWeapons(shipName)
    .subscribe(
      apiWeapons => this.shipWeapons = apiWeapons,
      error => this.shipWeapons = AWEAPONS
    );
  }
  
  getAbilitiesForShip(shipName: string) {
    this.shipService.getAbilities(shipName)
    .subscribe(
      apiAbilities => this.shipAbilities = apiAbilities,
      error => this.shipAbilities = AABILITY
    );
  }
  
  getPerksForShip(shipName: string) {
    this.shipService.getPerks(shipName)
    .subscribe(
      apiPerks => this.shipPerks = apiPerks,
      error => this.shipPerks = APERKS
    );
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