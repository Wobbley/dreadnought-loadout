import {PERKTYPE} from './perk-type'

export class Perk {
  id: number;
  name: string;
  slot: PERKTYPE;
  iconUri: string;
  
  constructor(id: number, name: string, slot: PERKTYPE, iconUri: string;) {
    this.id = id;
    this.name = name;
    this.slot = slot;
    this.iconUri = iconUri;
  }
}