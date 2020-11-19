import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  sections = ['Asset', 'Expense', 'Income', 'Libality'];
  listOfCategories = ['Necessity', 'Impulse', 'Luxury', 'Investment', 'Others'];
  startDate: Date;
  @Input() section: string;
  @Output() hideForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  formatDate() {
    this.startDate = new Date();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.startDate);


  }
  hideOverlay() {
    this.hideForm.emit('');
  }
}
