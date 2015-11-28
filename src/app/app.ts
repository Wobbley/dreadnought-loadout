import {Component, bootstrap,
  FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

class Ship {
  id: number;
  name: string;
  class: string;
  weight: string;
  icon_uri: string;
}

let SHIPS: Ship[] = [
  { "id": 1, "name": "Fulgora", "class": "Corvette", "weight":"Medium", "icon_uri": "temp/fulgora.png"},
  { "id": 1, "name": "Zmey", "class": "Dreadnought", "weight":"Medium", "icon_uri": "temp/zmey.png"},
  { "id": 1, "name": "Nox", "class": "Artillery", "weight":"Medium", "icon_uri": "temp/nox.png"},
];

@Component({
    selector: 'dreadnought-loadout',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'templates/loadout.html',
    styleUrls: ['css/default.css']
})

class LoadoutComponent {
  private selectedShip: Ship = {"id": 0, "name": "Select ship", "class": "none", "weight": "None", "icon_uri": "temp/logo.png"};
  
  private ships = SHIPS;
  private currentLoadoutElement;
  private infoVisible = false;

  selectPart(part: string) {
    this.currentLoadoutElement = part;
  }

  showInfo() {
    this.infoVisible = true;
  }

  hideInfo() {
    this.infoVisible = false;
  }
  
  selectShip(ship: Ship) {
    this.selectedShip = ship;
    this.currentLoadoutElement = null;
  }

}

bootstrap(LoadoutComponent);
