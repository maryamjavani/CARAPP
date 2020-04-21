import { Component, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
selector: 'star' ,
templateUrl: './star.component.html',
styleUrls: ['./star.component.css'] ,

})

export class StarComponent implements OnChanges{
starWidth: number;
@Input() rating: number ;


ngOnChanges(): void {
this.starWidth = this.rating * 100 / 5;
}

}
