import { Component, OnInit } from '@angular/core';
import { faJava, faJsSquare, faNodeJs, faAngular, faEmber, faHtml5, faCss3Alt, faReact, faPython, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  faJava = faJava
  faJsSquare = faJsSquare
  faNodeJs = faNodeJs
  faAngular = faAngular
  faEmber = faEmber
  faHtml5 = faHtml5
  faCss3Alt = faCss3Alt
  faReact = faReact
  faPython = faPython
  faStackOverflow = faStackOverflow
  
  constructor() { }

  ngOnInit() {
  }

}
