import {PerkType} from './perk.type'

export class Perk {
  id: number;
  name: string;
  slot: PerkType;
  iconUri: string;
  
  constructor(id: number, name: string, slot: string, iconUri: string) {
    this.id = id;
    this.name = name;
    this.slot = PerkType[slot];
    this.iconUri = iconUri;
  }
}