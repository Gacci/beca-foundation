import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'beca-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-screen-xl mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600">
          Have questions about our scholarships? We're here to help!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <svg class="w-6 h-6 text-brand-blue mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900">Email</h3>
              <a href="mailto:webmaster&#64;becafoundation.org" class="text-brand-blue hover:underline">
                webmaster&#64;becafoundation.org
              </a>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <svg class="w-6 h-6 text-brand-blue mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900">Phone</h3>
              <a href="tel:+18587794157" class="text-brand-blue hover:underline">
                +1 (858) 779-4157
              </a>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <svg class="w-6 h-6 text-brand-blue mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="font-semibold text-gray-900">Location</h3>
              <p class="text-gray-600">Escondido, CA, United States</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-lg p-8">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>

            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              [disabled]="!contactForm.form.valid"
              class="w-full bg-brand-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );
    window.location.href = `mailto:webmaster@becafoundation.org?subject=${subject}&body=${body}`;
  }
}
