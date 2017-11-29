import { Component, OnInit } from '@angular/core';
import { AbstractSearch } from '../../services/search/abstract-search';
import { ActivatedRoute } from '@angular/router';
import { Paper } from '../../models/paper';

@Component({
  selector: 'app-paper-page',
  templateUrl: './paper-page.component.html',
  styleUrls: ['./paper-page.component.css']
})
export class PaperPageComponent implements OnInit {
  constructor(public searchService: AbstractSearch,
    private route: ActivatedRoute) { }
  paper: Paper;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchService.getPaperByID(id).subscribe(paper => this.paper = paper);
  }


}
