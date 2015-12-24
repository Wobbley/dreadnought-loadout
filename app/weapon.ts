import {WeaponType} from './weapon.type'

export class Weapon {
  id: number;
  name: string;
  slot: WeaponType;
  iconUri: string;
  
  constructor(id: number, name: string, slot: WeaponType, iconUri: string) {
    this.id = id;
    this.name = name;
    this.slot = slot;
    this.iconUri = iconUri;
  }
}