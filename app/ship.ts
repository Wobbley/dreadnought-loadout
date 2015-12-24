export class Ship {
  id: number;
  name: string;
  iconUri: string;
  
  constructor(id: number, name: string, iconUri: string) {
    this.id = id;
    this.name = name;
    this.iconUri = iconUri;
  }
}