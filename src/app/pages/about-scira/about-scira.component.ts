import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-scira',
  templateUrl: './about-scira.component.html',
  styleUrls: ['./about-scira.component.css']
})
export class AboutSciraComponent implements OnInit {
  about = `When writing academic papers, searching for related literature and managing documents/references can be a burden. 
  We are developing a smart platform able to provide an innovative visual experience regarding the 
  references between papers, their genealogy, and various information about (co-)authors.
  Additionally, the system will offer multple data/knowledge visualization solutions and filtering
  techniques using several refinements (puplication year, subject, keywords, language).`
  constructor() { }

  ngOnInit() {
  }

}
