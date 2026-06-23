import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../shared/material-imports';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './notes.html'
})
export class Notes {

  note = '';

  notes: string[] = [];

  addNote() {
    if (!this.note.trim()) return;

    this.notes.push(this.note);

    localStorage.setItem(
      'notes',
      JSON.stringify(this.notes)
    );

    this.note = '';
  }

  ngOnInit() {
    const data = localStorage.getItem('notes');

    if (data) {
      this.notes = JSON.parse(data);
    }
  }
}