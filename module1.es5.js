import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var HelloComponent = /** @class */ (function () {
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
    { type: Component, args: [{
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
var AppModule1 = /** @class */ (function () {
    function AppModule1() {
    }
    return AppModule1;
}());
AppModule1.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    HelloComponent
                ],
                imports: [
                    RouterModule.forChild(appRoutes),
                    BrowserModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AppModule1.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { AppModule1, HelloComponent as ɵa };
//# sourceMappingURL=module1.es5.js.map
