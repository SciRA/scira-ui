import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter_visibility = true;
  paper_container_size = 'col s9';
  filter_container_size = 'col s3';
  filter_arrow_type = 'arrow_back';
  position = 'above';
  constructor() { }

  ngOnInit() {
    console.log(this);
  }
  toggleFilters() {
    if (this.filter_visibility) {
      this.filter_arrow_type = 'arrow_forward';
      this.paper_container_size = 'col s12';
      this.filter_container_size = 'col s0';
      document.getElementById('filter-container').classList.add('hide');
    } else {
      this.filter_arrow_type = 'arrow_back';
      this.paper_container_size = 'col s9';
      this.filter_container_size = 'col s3';
      document.getElementById('filter-container').classList.remove('hide');
    }
    this.filter_visibility = !this.filter_visibility;
  }

}
