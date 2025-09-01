import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Environment } from '../interface/environment.interface';
import { environment } from '../../environments/environment';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  public env: Environment = environment;

  /**
   *
   */
  public selectedDonationAmount: number = 0;

  /**
   *
   * @param titling
   */
  constructor(private titling: Title) {}

  ngOnInit(): void {
    this.titling.setTitle(`${this.env.siteName} | Home`);
  }

  setDonationAmount(amount: number): void {
    this.selectedDonationAmount = amount;
  }
}
