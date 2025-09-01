import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';

import { Environment } from '../interface/environment.interface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'beca-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styles: '',
  template: `
    <nav class="flex items-center justify-between flex-wrap bg-brand-blue p-6">
      <a
        class="flex items-center flex-shrink-0 text-white mr-6 z-30"
        routerLink="/"
      >
        <img
          class="w-12 h-12 rounded-full mr-4"
          src="assets/logos/beca_foundation_logo.jpg"
          alt="The Beca Foundation Inc. Logo"
        />
        <span class="hidden font-semibold text-xl tracking-tight lg:block">{{
          env.siteName
        }}</span>
      </a>
      <div class="block lg:hidden z-30">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          (click)="toggleMobileMenuVisibility()"
        >
          <span *ngIf="!mobileMenuDropdown">
            <span class="sr-only">Open menu</span>
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </span>

          <span *ngIf="mobileMenuDropdown">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x-mark -->
            <svg
              class="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        class="w-full h-full flex-grow fixed top-0 left-0 bg-brand-blue px-8 py-16 z-20 lg:px-0 lg:py-0 lg:relative lg:flex lg:items-center lg:w-auto"
        [class.hidden]="!mobileMenuDropdown"
        [class.block]="mobileMenuDropdown"
      >
        <div
          class="text-sm mt-16 lg:flex lg:flex-grow lg:justify-end lg:mx-16 lg:mt-0"
        >
          <a
            class="block px-4 py-2 rounded-lg lg:inline-block lg:mx-4 text-white"
            routerLink="/home"
            routerLinkActive="bg-indigo-500"
          >
            Home
          </a>
          <a
            class="block px-4 py-2 rounded-lg lg:inline-block lg:mx-4 text-white"
            routerLink="/scholarships"
            routerLinkActive="bg-indigo-500"
          >
            Scholarships
          </a>
          <a
            class="block px-4 py-2 rounded-lg lg:inline-block lg:mx-4 text-white"
            routerLink="/about"
            routerLinkActive="bg-indigo-500"
          >
            About
          </a>
        </div>
        <form
          class="mt-8 lg:m-0"
          method="post"
          action="https://www.paypal.com/cgi-bin/webscr"
        >
          <button
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-brand-blue hover:bg-white mt-4 lg:mt-0"
          >
            Donate
          </button>
          <input type="hidden" name="cmd" value="_donations" />
          <input
            type="hidden"
            name="business"
            value="webmaster@becafoundation.org"
          />
          <input type="hidden" name="amount" [value]="0" />
          <input type="hidden" name="lc" value="US" />
          <input type="hidden" name="item_name" value="BECA Foundation" />
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="hidden"
            name="bn"
            value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest"
          />
        </form>
      </div>
    </nav>
  `,
})
export class NavigationComponent implements OnInit {
  public env: Environment = environment;

  public mobileMenuDropdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuDropdown = false;
      }
    });
  }

  toggleMobileMenuVisibility() {
    this.mobileMenuDropdown = !this.mobileMenuDropdown;
  }
}
