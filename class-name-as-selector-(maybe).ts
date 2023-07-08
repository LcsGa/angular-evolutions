import { Component, computed, input, output } from "@angular/core";

@Component({
  template: `
    {#if myDoubledValue() === 10}
        <h2>Congrats!</h2>
        
        <p>That's the magic number!</p>
    {:else if myDoubledValue() > 10}
        <p>Too high...</p>
    {:else}
        <p>Too low...</p>
    {/if}
  `,
})
export class MyComponent {
    myValue = input(0);
    myOutput = output<number>();
    myDoubledValue = computed(() => this.myValue() * 2);
}
