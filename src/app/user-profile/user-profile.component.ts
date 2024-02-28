import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isAgeVisible: boolean = true;

  toggleAge(): void {
    this.isAgeVisible = !this.isAgeVisible;
  }

  updateQuote(newQuote: string): void {
    this.user.quote = newQuote;
  }
}
