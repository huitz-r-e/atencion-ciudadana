import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth: Auth) { }

  async signUp(email:string, password:string) {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
      );
    return user;
 }

 async login(email:string,password:string) {
  const user = await signInWithEmailAndPassword(
     this.auth,
    email,
    password
     );
  console.log(user);
  return user;
}

async signOut() {
  return signOut(this.auth);
}
}
