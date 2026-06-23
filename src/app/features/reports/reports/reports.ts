import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {}
