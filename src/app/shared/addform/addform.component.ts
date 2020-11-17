import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  sections = ['Asset', 'Expense', 'Income', 'Libality'];
  @Input() section: string;
  @Output() hideForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
  }
  hideOverlay() {
    this.hideForm.emit('');
  }
}
