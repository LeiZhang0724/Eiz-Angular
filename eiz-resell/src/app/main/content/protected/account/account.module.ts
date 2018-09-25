import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';

const accountRoutes: Routes = [
    {
        path: 'list',
        component: ListComponent,
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(accountRoutes);

@NgModule({
    declarations: [
        ListComponent,
    ],
    imports: [
        RouterModule.forChild(accountRoutes),
        RoutingModule,
        SharedModule
    ],
    entryComponents: [],
    providers: [],
    exports: [
        RouterModule
    ],
    })

export class AccountModule {
}
