export interface Weapon {
  id: number;
  name: string;
  slot: WEAPONTYPE;
  icon_uri: string;
}

export enum WEAPONTYPE {
  PRIMARY,
  SECONDARY,
}