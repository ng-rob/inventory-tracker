import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { PageTitleService } from "./page-title.service";
import { PageData } from "../../app-routing.module";

@Injectable({
  providedIn: "root",
})
export class PageTitleResolver implements Resolve<boolean> {
  constructor(private homeTitle: PageTitleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.homeTitle.updateTitle((route.data as PageData).title);
    return of(true);
  }
}
