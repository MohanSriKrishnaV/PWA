import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-inspection-form',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './inspection-form.html',
  styleUrl: './inspection-form.scss',
})
export class InspectionForm {}
