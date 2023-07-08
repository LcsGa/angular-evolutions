import { Component, computed, input, output } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector: "my-component",
    standalone: true,
    signals: true,
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
    myValue = input(0);
    myOutput = output<number>();
    myDoubledValue = computed(() => this.myValue() * 2);
}
