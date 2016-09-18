import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/AppComponent';
import { TodoListComponent } from './components/TodoListComponent';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class MainModule {}

