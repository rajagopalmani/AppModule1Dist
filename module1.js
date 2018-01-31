import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

class HelloComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HelloComponent.decorators = [
    { type: Component, args: [{
                template: `"Hello from External Component`
            },] },
];
/**
 * @nocollapse
 */
HelloComponent.ctorParameters = () => [];

const appRoutes = [
    { path: '', component: HelloComponent, pathMatch: 'full' }
];
class AppModule1 {
}
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
AppModule1.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AppModule1, HelloComponent as ɵa };
//# sourceMappingURL=module1.js.map
