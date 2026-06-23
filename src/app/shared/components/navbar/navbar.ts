import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../material-imports';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ...MATERIAL_IMPORTS],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
