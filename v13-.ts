import { Component, EventEmitter, Input, NgModule, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, map } from "rxjs";

@Component({
    selector: "my-component",
    template: `
        <ng-container *ngIf="myDoubledValue$ | async as doubled">
            <ng-container *ngIf="doubled === 10; else notMagic">
                <h2>Congrats!</h2>
    
                <p>That's the magic number!</p>
            </ng-container>
    
            <ng-template #notMagic>
                <p *ngIf="doubled > 10">Too high...</p>
    
                <p *ngIf="doubled < 10">Too low...</p>
            </ng-template>
        </ng-container>
    `,
})
export class MyComponent {
    myValue$ = new BehaviorSubject(0);
    myDoubledValue$ = this.myValue$.pipe(map((val) => val * 2));

    @Input() set myValue(value: number) {
        this.myValue$.next(value);
    }

    @Output() myOutput = new EventEmitter<number>();
}

@NgModule({
    declarations: [MyComponent],
    imports: [CommonModule],
    exports: [MyComponent],
})
export class MyComponentModule {}
