System.register([], function(exports_1) {
    var Weapon;
    return {
        setters:[],
        execute: function() {
            Weapon = (function () {
                function Weapon(id, name, slot, iconUri) {
                    this.id = id;
                    this.name = name;
                    this.slot = slot;
                    this.iconUri = iconUri;
                }
                return Weapon;
            })();
            exports_1("Weapon", Weapon);
        }
    }
});
//# sourceMappingURL=weapon.js.map