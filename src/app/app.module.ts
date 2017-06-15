import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from './header/';
import { MainSectionModule } from './main-section/';

import { AppComponent } from './app.component';

import { TodoStore } from './shared/services/todo.store';

/* Routing Module */

/**
 * The bootstrapper module
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HeaderModule,
        MainSectionModule,
    ],
    providers: [
        TodoStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
