import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import { ViewComponent } from './view/view.component';
import {AccountService} from '../../shared/service/account.service';
import { EditComponent } from './edit/edit.component';

const accountRoutes: Routes = [
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'view/:id',
        component: ViewComponent,
    },
    {
     path: 'edit/:id',
         component: EditComponent,
    },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(accountRoutes);

@NgModule({
    declarations: [
        ListComponent,
        ViewComponent,
        EditComponent,
    ],
    imports: [
        RouterModule.forChild(accountRoutes),
        RoutingModule,
        SharedModule
    ],
    entryComponents: [],
    providers: [
        AccountService
    ],
    exports: [
        RouterModule
    ],
    })

export class AccountModule {
}
