import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private venueOwners = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@host.com',
    password: '1234',
  }];

  constructor() {
  }

  registerAsVenueOwner(data) {
    this.venueOwners.push(data);

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
