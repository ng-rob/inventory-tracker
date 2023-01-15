import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PageTitleResolver } from './services/page-title.resolver';

export interface PageData {
  title: string;
}

function buildPageData(title: string): PageData {
  return {
    title,
  };
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'data-table',
        data: buildPageData('Data Table Example'),
        resolve: [PageTitleResolver],
        loadChildren: () =>
          import('./data-table/data-table.module').then(m => m.DataTableModule),
      },
      {
        path: '**',
        redirectTo: 'data-table',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSidenavModule, MatToolbarModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
