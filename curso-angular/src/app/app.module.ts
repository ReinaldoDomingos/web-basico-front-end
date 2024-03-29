import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ConsultaDataService} from './consulta-data.service';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {ApiService} from './api.service';
import {AppRoutingModule} from './app-routing.module';
import {TodosComponent} from './todos/todos.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    TodosComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConsultaDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
