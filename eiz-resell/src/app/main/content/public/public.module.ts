import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {QuotesComponent} from './quotes/quotes.component';
import {HomeComponent} from './home/home.component';

const publicRoutes: Routes = [
    {
        path: 'quotes',
        component: QuotesComponent
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        QuotesComponent
    ],
    imports: [
        RouterModule.forChild(publicRoutes),
        SharedModule
    ],
    entryComponents: [
    ],
    providers: [],
    exports: [
        RouterModule
    ],
})
export class PublicModule {
}
