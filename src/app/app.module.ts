import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {SettingsServiceGateway} from "./_services/settings-gateway";
import {DetailsComponent} from "./register/details.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DetailsComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        // SettingsService,
        SettingsServiceGateway,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
