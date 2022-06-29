import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() col!: string;
  @Input() data!: Array<any>;

  rowNumbers: any;

  constructor() { }

  ngOnInit(): void {
    const rows = Math.ceil(this.data.length / +this.col);
    this.rowNumbers = [];
    for(let i = 0; i < rows; i ++) {
      this.rowNumbers.push(i);
    }
  }

  selectItems(rowIndex:any) {

    let selectedItems = [];

    const start = rowIndex * +this.col;
    const end = start + (+this.col -1);

    for(let i = start; i <= end; i++) {
      if(this.data[i]) {
        selectedItems.push(this.data[i]);
      }
    }
    

    return selectedItems;
  }

}
