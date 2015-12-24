System.register(['./loadout.component', 'angular2/platform/browser', 'angular2/http'], function(exports_1) {
    var loadout_component_1, browser_1, http_1;
    return {
        setters:[
            function (loadout_component_1_1) {
                loadout_component_1 = loadout_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(loadout_component_1.LoadoutComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map