export interface Perk {
  id: number;
  name: string;
  slot: PERKTYPE;
  icon_uri: string;
}

export enum PERKTYPE {
  COMMUNICATIONS,
  NAVIGATION,
  ENGINEERING,
  WEAPONS,
}