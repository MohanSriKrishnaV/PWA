import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss',
})
export class JobList {}
