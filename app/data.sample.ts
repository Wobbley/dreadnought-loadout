import {Ship} from './ship';
import {Weapon} from './weapon';
import {WeaponType} from './weapon.type';
import {Ability} from './ability';
import {AbilityType} from './ability.type';
import {Perk} from './perk';
import {PerkType} from './perk.type';

export var SHIPS: Ship[] = [
  { "id": 1, "name": "Fulgora", "iconUri": "temp/fulgora.png"},
  { "id": 1, "name": "Zmey", "iconUri": "temp/zmey.png"},
  { "id": 1, "name": "Nox", "iconUri": "temp/nox.png"},
];

export var AWEAPONS: Weapon[] = [
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png"},
];

export var AABILITY: Ability[] = [
  {"id": 1, "name": "Main Module", "slot": AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png"},
]

export var APERKS: Perk[] = [
  {"id": 1, "name": "Communications", "slot": PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png"},
]