import {AbilityType} from './ability-type'

export class Ability {
  id: number;
  name: string;
  slot: AbilityType;
  iconUri: string;
  
  constructor(id: number, name: string, slot: AbilityType, iconUri: string) {
    
  }
}