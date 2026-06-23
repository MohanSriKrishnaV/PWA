import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
