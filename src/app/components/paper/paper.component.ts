import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../../models/paper';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  @Input() paper: Paper;
  constructor() {
    console.log('paper-constructor');
  }

  ngOnInit() {
    console.log('on init');
  }

}
