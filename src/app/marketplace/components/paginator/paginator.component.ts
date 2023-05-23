import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  @Input() active!: boolean;
  @Output() siguiente = new EventEmitter<number>();

  public page: number = 0;

  nextPage() {
    this.page += 16;
    this.siguiente.emit(this.page);
  }
  prevPage() {
    if (this.page > 0) this.page -= 16;
    this.siguiente.emit(this.page);
  }
}
