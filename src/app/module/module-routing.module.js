var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { ModuleCreateComponent } from './module-create.component';
import { ModuleEditComponent } from './module-edit.component';
var ModuleRoutingModule = (function () {
    function ModuleRoutingModule() {
    }
    return ModuleRoutingModule;
}());
ModuleRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'module/create', component: ModuleCreateComponent, canActivate: [OlmService] },
                { path: 'module/edit/:id/:version', component: ModuleEditComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], ModuleRoutingModule);
export { ModuleRoutingModule };
//# sourceMappingURL=module-routing.module.js.map