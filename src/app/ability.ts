export interface Ability {
  id: number;
  name: string;
  slot: ABILITYTYPE;
  icon_uri: string;
}

export enum ABILITYTYPE {
  PRIMARY,
  SECONDARY,
  PERIMETER,
  INTERNAL,
}