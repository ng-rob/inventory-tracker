import { Injectable } from "@angular/core";
import { BaseHttpService } from "../base-http-service";
import { delay, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  jobTitle?: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService extends BaseHttpService {
  userBaseUrl = this.baseUrl + "/users";

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userBaseUrl).pipe(delay(500));
  }
}
