import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../shared/data-shared.service';
@Component({
  selector: 'app-table-part',
  templateUrl: './table-part.component.html',
  styleUrls: ['./table-part.component.css']
})
export class TablePartComponent implements OnInit {
  table_data;
  constructor(private shared: DataSharedService) { }
  
  ngOnInit(): void {
    this.table_data= this.shared.currentMessage.subscribe(tab_data => this.table_data=tab_data);
    console.log(this.table_data);
  }

}
