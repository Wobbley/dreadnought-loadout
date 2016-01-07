import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import Ship from './ship';
import Weapon from './weapon';
import WeaponType from './weapon.type';
import Ability from './ability';
import AbilityType from './ability.type';
import Perk from './perk';
import PerkType from './perk.type';
import DefaultLoadoutFactory from './default.factory';
import ShipService from './ship.service';
import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, TOOLTIP_DIRECTIVES],
    template: require('./loadout.html'),
    styles: [ require('../public/css/default.css')],
    providers: [ShipService, DefaultLoadoutFactory]
})
export class LoadoutComponent {

  public selectedShip: Ship;
  public selectedWeapons: Weapon[];
  public selectedAbilities: Ability[];
  public selectedPerks: Perk[];

  private ships: Array<Ship>;

  private shipWeapons: Weapon[];
  private slotWeapons: Weapon[];

  private shipAbilities: Ability[];
  private slotAbilities: Ability[];

  private shipPerks: Perk[];
  private slotPerks: Perk[];

  private currentLoadoutElement;
  private infoVisible = false;

  constructor(public shipService: ShipService, public defaultFactory : DefaultLoadoutFactory) {
    this.getShips();
    this.selectedShip = this.defaultFactory.getShip();
    this.selectedWeapons = this.defaultFactory.getWeapons();
    this.selectedAbilities = this.defaultFactory.getAbilities();
    this.selectedPerks = this.defaultFactory.getPerks();
  }

  getShips() {
    this.shipService.getShips()
    .subscribe(
      apiShips => this.ships = apiShips
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
    let correctWeapons: Weapon[] = [];
    for (let weapon of this.shipWeapons) {
      if (weapon.slot === weaponType) {
        correctWeapons.push(weapon);
      }
    }
    this.slotWeapons = correctWeapons;
    this.currentLoadoutElement = 'weapon';
  }

  getAbility(slot: string) {
    let abilityType: AbilityType = AbilityType[slot];
    let correctAbilities: Ability[] = [];
    for (let ability of this.shipAbilities) {
      if (ability.slot === abilityType) {
        correctAbilities.push(ability);
      }
    }
    this.slotAbilities = correctAbilities;
    this.currentLoadoutElement = 'ability';
  }

  getPerk(slot: string) {
    let perkType: PerkType = PerkType[slot];
    let correctPerks: Perk[] = [];
    for (let perk of this.shipPerks) {
      if (perk.slot === perkType) {
        correctPerks.push(perk);
      }
    }
    this.slotPerks = correctPerks;
    this.currentLoadoutElement = 'perk';
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
    this.resetSelection();
  }

  resetSelection() {
    this.selectedWeapons = this.defaultFactory.getWeapons();
    this.selectedAbilities = this.defaultFactory.getAbilities();
    this.selectedPerks = this.defaultFactory.getPerks();
  }

  getWeaponsForShip(shipName: string) {
    this.shipService.getWeapons(shipName)
    .subscribe(
      apiWeapons => this.shipWeapons = apiWeapons
    );
  }

  getAbilitiesForShip(shipName: string) {
    this.shipService.getAbilities(shipName)
    .subscribe(
      apiAbilities => this.shipAbilities = apiAbilities
    );
  }

  getPerksForShip(shipName: string) {
    this.shipService.getPerks(shipName)
    .subscribe(
      apiPerks => this.shipPerks = apiPerks
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
