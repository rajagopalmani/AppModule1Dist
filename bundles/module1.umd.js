(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser', '@angular/core', '@angular/router'], factory) :
	(factory((global.module1 = {}),global.ng.platformBrowser,global.ng.core,global.ng.router));
}(this, (function (exports,platformBrowser,core,router) { 'use strict';

var HelloComponent = (function () {
    function HelloComponent() {
    }
    /**
     * @return {?}
     */
    HelloComponent.prototype.ngOnInit = function () {
    };
    return HelloComponent;
}());
HelloComponent.decorators = [
    { type: core.Component, args: [{
                template: "\"Hello from External Component"
            },] },
];
/**
 * @nocollapse
 */
HelloComponent.ctorParameters = function () { return []; };
var appRoutes = [
    { path: '', component: HelloComponent, pathMatch: 'full' }
];
var AppModule1 = (function () {
    function AppModule1() {
    }
    return AppModule1;
}());
AppModule1.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    HelloComponent
                ],
                imports: [
                    router.RouterModule.forChild(appRoutes),
                    platformBrowser.BrowserModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AppModule1.ctorParameters = function () { return []; };

exports.AppModule1 = AppModule1;
exports.ɵa = HelloComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=module1.umd.js.map
