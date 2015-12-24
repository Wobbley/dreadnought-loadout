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
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.Primary, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.Primary, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Big Ass Weapon", "slot": WeaponType.Primary, "iconUri": "temp/primary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.Secondary, "iconUri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.Secondary, "iconUri": "temp/secondary-weapon.png"},
  {"id": 1, "name": "Smaller Weapon", "slot": WeaponType.Secondary, "iconUri": "temp/secondary-weapon.png"},
];

export var AABILITY: Ability[] = [
  {"id": 1, "name": "Main Module", "slot": AbilityType.Primary, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": AbilityType.Primary, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Main Module", "slot": AbilityType.Primary, "iconUri": "temp/primary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.Secondary, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.Secondary, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Secondary Module", "slot": AbilityType.Secondary, "iconUri": "temp/secondary-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.Internal, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.Internal, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Internal Module", "slot": AbilityType.Internal, "iconUri": "temp/internal-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.Perimeter, "iconUri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.Perimeter, "iconUri": "temp/perimeter-ability.png"},
  {"id": 1, "name": "Perimeter Module", "slot": AbilityType.Perimeter, "iconUri": "temp/perimeter-ability.png"},
]

export var APERKS: Perk[] = [
  {"id": 1, "name": "Communications", "slot": PerkType.Communications, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PerkType.Communications, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Communications", "slot": PerkType.Communications, "iconUri": "temp/communications-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.Navigation, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.Navigation, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Navigation", "slot": PerkType.Navigation, "iconUri": "temp/navigation-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.Engineering, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.Engineering, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Engineering", "slot": PerkType.Engineering, "iconUri": "temp/engineering-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.Weapons, "iconUri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.Weapons, "iconUri": "temp/weapons-perk.png"},
  {"id": 1, "name": "Weapons", "slot": PerkType.Weapons, "iconUri": "temp/weapons-perk.png"},
]