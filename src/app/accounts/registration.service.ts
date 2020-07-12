import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private venueOwners = [];

  constructor() { }

  registerAsVenueOwner(data) {
    this.venueOwners.push(data);

    console.log(this.venueOwners);

    return Promise.resolve({ success: true });
  }

  registerAsAttendee() {

  }

  createQRCodeForAttendee() {

  }

  login(email: string, password: string) {
    let authenticated;

    this.venueOwners.forEach((user) => {
      if (user.email === email && user.password === password) {
        authenticated = user;
      }
    });

    if (authenticated) {
      return Promise.resolve(authenticated);
    }

    return Promise.reject({ errorMessage: 'User not found' });
  }
}
