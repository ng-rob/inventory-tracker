import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  Observable,
  ReplaySubject,
  buffer,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new ReplaySubject<void>(1);
  private ngUnsubscribe$ = this.ngUnsubscribe.asObservable();

  title$: Observable<string | null> = this.route.data.pipe(
    map(params => {
      console.log('data', params);
      return params['title'] ?? null;
    })
  );

  title = 'Inventory Tracker';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeEndEvent$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => console.warn('END'))
    );

    this.router.events
      .pipe(
        filter(
          e =>
            e instanceof ChildActivationEnd &&
            e.snapshot.component === this.route.component
        ),
        buffer(routeEndEvent$)
        // map(([ev]) => (ev as ChildActivationEnd).snapshot.firstChild?.data),
        // takeUntil(this.ngUnsubscribe$)
      )
      .subscribe(childRoute => {
        console.log('childRoute', childRoute);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }
}
