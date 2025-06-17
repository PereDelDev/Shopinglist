import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingList: string[] = []
  private shoppingListBought: string[] = []

  getList(): string[] {
    return this.shoppingList
  }
  addItem(item: string): void {
    this.shoppingList.push(item)
  }

  removeItem(index: number): void {
    this.shoppingList.splice(index, 1)
  }
  clearList(): void {
    this.shoppingList = []
  }
  getListB(): string[] {
    return this.shoppingListBought
  }
  addItemB(item: string): void {
    this.shoppingListBought.push(item)
  }

  removeItemB(index: number): void {
    this.shoppingListBought.splice(index, 1)
  }
  clearListB(): void {
    this.shoppingListBought = []
  }
}
