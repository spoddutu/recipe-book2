import {UpgradeComponent} from "@angular/upgrade/static";
import {Directive, ElementRef, Injector, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Directive({selector: 'recipes'})
export class RecipesComponent extends UpgradeComponent implements OnInit, OnChanges {

    constructor(elementRef: ElementRef, injector: Injector){
        super('recipes', elementRef, injector);
    }

    ngOnInit(): void {
        return super.ngOnInit();
    }

    ngOnChanges(changes: SimpleChanges): void {
        return super.ngOnChanges(changes);
    }
}