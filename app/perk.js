System.register([], function(exports_1) {
    var Perk;
    return {
        setters:[],
        execute: function() {
            Perk = (function () {
                function Perk(id, name, slot, iconUri) {
                    this.id = id;
                    this.name = name;
                    this.slot = slot;
                    this.iconUri = iconUri;
                }
                return Perk;
            })();
            exports_1("Perk", Perk);
        }
    }
});
//# sourceMappingURL=perk.js.map