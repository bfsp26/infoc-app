import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input() term: string = '';
  @Input() error: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
