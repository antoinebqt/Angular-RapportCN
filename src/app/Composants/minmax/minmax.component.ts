import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-minmax',
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.css']
})
export class MinmaxComponent implements OnInit {

  homeIcon = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
