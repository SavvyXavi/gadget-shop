import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [FormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
})
export class Inventory {
  inventoryData = {
    productId: "",
    productName: "",
    availableQty: 0,
    reorderQty: 0
  }

  onSubmit() {
    alert(`Form submitted successfully: ${JSON.stringify(this.inventoryData)}`);
  }
}
