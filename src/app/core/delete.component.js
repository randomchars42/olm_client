var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { CutPipe } from '../shared/cut.pipe';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var DeleteComponent = (function () {
    function DeleteComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.type = '';
        this.item = {};
    }
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            return _this.olmService.apiRead(params['type'], params['id'], 'current');
        })
            .subscribe(function (result) {
            if (result.name || result.question) {
                _this.item = result;
            }
            else {
                _this.item = { name: "GELÖSCHT", question: "GELÖSCHT" };
            }
        });
    };
    ;
    DeleteComponent.prototype.delete = function () {
        var _this = this;
        console.log(this.type + ' ' + this.id);
        this.olmService.apiDelete(this.type, this.id)
            .subscribe(function (result) {
            _this.location.back();
        });
    };
    ;
    DeleteComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    Component({
        selector: 'delete',
        templateUrl: './delete.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], DeleteComponent);
export { DeleteComponent };
//# sourceMappingURL=delete.component.js.map