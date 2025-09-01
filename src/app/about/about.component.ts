import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Environment } from '../interface/environment.interface';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  /**
   *
   */
  public env: Environment = environment;

  constructor(private titling: Title) {}

  ngOnInit(): void {
    this.titling.setTitle(`${this.env.siteName} | About Us`);
  }
}
