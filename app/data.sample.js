System.register(['./weapon.type', './ability.type', './perk.type'], function(exports_1) {
    var weapon_type_1, ability_type_1, perk_type_1;
    var SHIPS, AWEAPONS, AABILITY, APERKS;
    return {
        setters:[
            function (weapon_type_1_1) {
                weapon_type_1 = weapon_type_1_1;
            },
            function (ability_type_1_1) {
                ability_type_1 = ability_type_1_1;
            },
            function (perk_type_1_1) {
                perk_type_1 = perk_type_1_1;
            }],
        execute: function() {
            exports_1("SHIPS", SHIPS = [
                { "id": 1, "name": "Fulgora", "iconUri": "temp/fulgora.png" },
                { "id": 1, "name": "Zmey", "iconUri": "temp/zmey.png" },
                { "id": 1, "name": "Nox", "iconUri": "temp/nox.png" },
            ]);
            exports_1("AWEAPONS", AWEAPONS = [
                { "id": 1, "name": "Big Ass Weapon", "slot": weapon_type_1.WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png" },
                { "id": 1, "name": "Big Ass Weapon", "slot": weapon_type_1.WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png" },
                { "id": 1, "name": "Big Ass Weapon", "slot": weapon_type_1.WeaponType.PRIMARY, "iconUri": "temp/primary-weapon.png" },
                { "id": 1, "name": "Smaller Weapon", "slot": weapon_type_1.WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png" },
                { "id": 1, "name": "Smaller Weapon", "slot": weapon_type_1.WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png" },
                { "id": 1, "name": "Smaller Weapon", "slot": weapon_type_1.WeaponType.SECONDARY, "iconUri": "temp/secondary-weapon.png" },
            ]);
            exports_1("AABILITY", AABILITY = [
                { "id": 1, "name": "Main Module", "slot": ability_type_1.AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png" },
                { "id": 1, "name": "Main Module", "slot": ability_type_1.AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png" },
                { "id": 1, "name": "Main Module", "slot": ability_type_1.AbilityType.PRIMARY, "iconUri": "temp/primary-ability.png" },
                { "id": 1, "name": "Secondary Module", "slot": ability_type_1.AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png" },
                { "id": 1, "name": "Secondary Module", "slot": ability_type_1.AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png" },
                { "id": 1, "name": "Secondary Module", "slot": ability_type_1.AbilityType.SECONDARY, "iconUri": "temp/secondary-ability.png" },
                { "id": 1, "name": "Internal Module", "slot": ability_type_1.AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png" },
                { "id": 1, "name": "Internal Module", "slot": ability_type_1.AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png" },
                { "id": 1, "name": "Internal Module", "slot": ability_type_1.AbilityType.INTERNAL, "iconUri": "temp/internal-ability.png" },
                { "id": 1, "name": "Perimeter Module", "slot": ability_type_1.AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png" },
                { "id": 1, "name": "Perimeter Module", "slot": ability_type_1.AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png" },
                { "id": 1, "name": "Perimeter Module", "slot": ability_type_1.AbilityType.PERIMETER, "iconUri": "temp/perimeter-ability.png" },
            ]);
            exports_1("APERKS", APERKS = [
                { "id": 1, "name": "Communications", "slot": perk_type_1.PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png" },
                { "id": 1, "name": "Communications", "slot": perk_type_1.PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png" },
                { "id": 1, "name": "Communications", "slot": perk_type_1.PerkType.COMMUNICATIONS, "iconUri": "temp/communications-perk.png" },
                { "id": 1, "name": "Navigation", "slot": perk_type_1.PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png" },
                { "id": 1, "name": "Navigation", "slot": perk_type_1.PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png" },
                { "id": 1, "name": "Navigation", "slot": perk_type_1.PerkType.NAVIGATION, "iconUri": "temp/navigation-perk.png" },
                { "id": 1, "name": "Engineering", "slot": perk_type_1.PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png" },
                { "id": 1, "name": "Engineering", "slot": perk_type_1.PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png" },
                { "id": 1, "name": "Engineering", "slot": perk_type_1.PerkType.ENGINEERING, "iconUri": "temp/engineering-perk.png" },
                { "id": 1, "name": "Weapons", "slot": perk_type_1.PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png" },
                { "id": 1, "name": "Weapons", "slot": perk_type_1.PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png" },
                { "id": 1, "name": "Weapons", "slot": perk_type_1.PerkType.WEAPONS, "iconUri": "temp/weapons-perk.png" },
            ]);
        }
    }
});
//# sourceMappingURL=data.sample.js.map