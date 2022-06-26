import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap,delay  } from 'rxjs/operators';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {
  // @Input() hero: string;
  @Input('master') masterName = '';
  @Output() userName = new EventEmitter<string>();
  constructor() {

   console.log('constructor \n')
    // from([ { delay: 5000, message: 'A'} , { delay: 2000 , message: 'B'}, { delay: 3000 , message: 'C'} ]).pipe(
    //   concatMap( item => of(item).pipe( delay( item.delay ) )) 
    // ).subscribe((r) => {
    //   console.log("Inside Constructor")
    // });
   }

  ngOnInit(): void {
    console.log(this.masterName)
  }
  onCardClick(){
    this.userName.emit(this.masterName);
  }
}

