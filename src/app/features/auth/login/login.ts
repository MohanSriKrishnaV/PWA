import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
