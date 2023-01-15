import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PageTitleService {
  private title = new ReplaySubject<string>(1);
  title$ = this.title.asObservable();

  updateTitle(value: string) {
    this.title.next(value);
  }
}
