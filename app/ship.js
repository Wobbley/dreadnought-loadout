System.register([], function(exports_1) {
    var Ship;
    return {
        setters:[],
        execute: function() {
            Ship = (function () {
                function Ship(id, name, iconUri) {
                    this.id = id;
                    this.name = name;
                    this.iconUri = iconUri;
                }
                return Ship;
            })();
            exports_1("Ship", Ship);
        }
    }
});
//# sourceMappingURL=ship.js.map