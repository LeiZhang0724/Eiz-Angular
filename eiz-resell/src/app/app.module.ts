import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './main/content/shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MainModule} from './main/main.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiHeaderInterceptor} from './main/content/shared/service/api-header.interceptor';
import {AuthGuard} from './main/content/shared/service/auth.guard';
import {RedirectComponent} from './main/content/shared/components/redirect/redirect.component';
import {QuotesComponent} from './main/content/public/quotes/quotes.component';
import {VerifyComponent} from './main/content/shared/components/verify/verify.component';

const appRoutes: Routes = [
    {
        path: 'redirect',
        component: RedirectComponent
    },
    {
        path: 'verify',
        component: VerifyComponent
    },
    {
        path: 'shipping',
        loadChildren: './main/content/public/public.module#PublicModule'
    },
    {
        path: 'admin',
        loadChildren: './main/content/protected/protected.module#ProtectedModule',
        // canActivate: [AuthGuard]
    },
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: '',
        redirectTo: 'shipping',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        LoadingBarRouterModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        MainModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiHeaderInterceptor,
            multi: true
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
