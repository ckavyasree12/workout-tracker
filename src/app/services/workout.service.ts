import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private userDataKey = 'userData';
  private initialData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    }
  ];
  private usersSubject = new BehaviorSubject<any[]>(this.getUsers()); // Initialize with current data
  users$ = this.usersSubject.asObservable(); // Expose as observable

  constructor() {
    // Check if localStorage is available (only in browser)
    if (this.isBrowser()) {
      if (!localStorage.getItem(this.userDataKey)) {
        localStorage.setItem(this.userDataKey, JSON.stringify(this.initialData));
      }
    }
  }

  // Helper function to check if running in browser environment
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getUsers() {
    if (this.isBrowser()) {
      return JSON.parse(localStorage.getItem(this.userDataKey) || '[]');
    }
    return [];  // Return empty array if not in browser
  }

  addUser(user: any) {
    if (this.isBrowser()) {
      const users = this.getUsers();
      users.push(user);
      localStorage.setItem(this.userDataKey, JSON.stringify(users));
      this.usersSubject.next(users); // Notify subscribers
    }
  }

  updateUser(user: any) {
    if (this.isBrowser()) {
      const users = this.getUsers();
      const index = users.findIndex((u: any) => u.id === user.id);
      if (index !== -1) {
        users[index] = user;
        localStorage.setItem(this.userDataKey, JSON.stringify(users));
      }
    }
  }

  deleteUser(id: number) {
    if (this.isBrowser()) {
      const users = this.getUsers().filter((u: any) => u.id !== id);
      localStorage.setItem(this.userDataKey, JSON.stringify(users));
    }
  }
}
