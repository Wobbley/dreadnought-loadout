import {PerkType} from './perk-type'

export class Perk {
  id: number;
  name: string;
  slot: PerkType;
  iconUri: string;
  
  constructor(id: number, name: string, slot: PerkType, iconUri: string) {
    this.id = id;
    this.name = name;
    this.slot = slot;
    this.iconUri = iconUri;
  }
}