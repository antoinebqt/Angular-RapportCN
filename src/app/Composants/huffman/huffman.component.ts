import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-huffman',
  templateUrl: './huffman.component.html',
  styleUrls: ['./huffman.component.css']
})
export class HuffmanComponent implements OnInit {

  homeIcon = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
