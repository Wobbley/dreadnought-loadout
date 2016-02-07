import AbilityType from './ability.type';

export default class Ability {
  id: number;
  name: string;
  slot: AbilityType;
  iconUri: string;

  constructor(id: number, name: string, slot: string, iconUri: string) {
    this.id = id;
    this.name = name;
    this.slot = AbilityType[slot];
    this.iconUri = iconUri;
  }
}
