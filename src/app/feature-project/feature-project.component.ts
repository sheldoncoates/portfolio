import { Component, OnInit, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-feature-project',
  templateUrl: './feature-project.component.html',
  styleUrls: ['./feature-project.component.scss']
})
export class FeatureProjectComponent implements OnInit {
  faGithub = faGithub;
  faDesktop = faDesktop;

  @Input()
  pic:string;
  @Input()
  title:string;
  @Input()
  about:string;
  @Input()
  tools:string;
  @Input()
  github:string;
  @Input()
  website:string;

  
  constructor() { }

  ngOnInit() {
  }

}
