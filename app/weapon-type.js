System.register([], function(exports_1) {
    var WeaponType;
    return {
        setters:[],
        execute: function() {
            (function (WeaponType) {
                WeaponType[WeaponType["PRIMARY"] = 0] = "PRIMARY";
                WeaponType[WeaponType["SECONDARY"] = 1] = "SECONDARY";
            })(WeaponType || (WeaponType = {}));
            exports_1("WeaponType", WeaponType);
        }
    }
});
//# sourceMappingURL=weapon-type.js.map