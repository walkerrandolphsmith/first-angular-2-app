import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/AppComponent';
import { RemoteComponent } from './components/RemoteComponent';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        RemoteComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class MainModule {}

