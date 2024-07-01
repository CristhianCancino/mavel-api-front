import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './characters-list/characters-list.component';
import { QueryLogComponent } from './query-log/query-log.component';

export const routes: Routes = [
  { path: 'characters', component: CharacterListComponent },
  { path: 'query-log', component: QueryLogComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }