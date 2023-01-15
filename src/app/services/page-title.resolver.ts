import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PageTitleService } from './page-title.service';
import { PageData } from '../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class PageTitleResolver implements Resolve<boolean> {
  constructor(private homeTitle: PageTitleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(route.data);
    this.homeTitle.updateTitle((route.data as PageData).title);
    return of(true);
  }
}
