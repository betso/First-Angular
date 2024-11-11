import { Component, inject, input, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-expander',
  standalone: true,
  imports: [MatListModule, MatIconModule,CommonModule,MatSelectModule,TranslateModule],
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss'
})

export class ExpanderComponent {

  @Input() title: string | undefined;
  
  @Input() itemsSource = [{id: 0, name: '', isChecked: false}];

  @Input() selectedItem: any;

  @Input() isExpanded: boolean = false;

  // ngOnInit() {
  //   let l = localStorage.getItem('lang');

  //   this.itemsSource.forEach(item => {
  //     if (item.name.toLowerCase() == l)
  //     {
  //       this.selectedItem = item;
  //       item.isChecked = true;
  //     }
  // });
  // }

  selectionChanged(id:number)
  {
    this.itemsSource.forEach(item => {
      item.isChecked = item.id == id;
        if (item.isChecked)
        {
          this.selectedItem = item;
          //this.changeLang(item.name.toLowerCase());
          this.isExpanded = false;
        }
    });
  }
}
