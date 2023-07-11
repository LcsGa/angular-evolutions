import { Component, computed, EventEmitter, Input, Output, signal } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector: "my-component",
    standalone: true,
    imports: [NgIf],
    template: `
        <ng-container *ngIf="myDoubledValue() === 10; else notMagic">
            <h2>Congrats!</h2>
    
            <p>That's the magic number!</p>
        </ng-container>

        <ng-template #notMagic>
            <p *ngIf="myDoubledValue() > 10">Too high...</p>
    
            <p *ngIf="myDoubledValue() < 10">Too low...</p>
        </ng-template>
    `,
})
export class MyComponent {
    myVal = signal(0);
    myDoubledValue = computed(() => this.myVal() * 2);

    @Input() set myValue(value: number) {
        this.myVal.set(value);
    }

    @Output() myOutput = new EventEmitter<number>();
}
