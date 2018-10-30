import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import { ViewComponent } from './view/view.component';
import {AccountService} from '../../shared/service/account.service';
import { EditComponent } from './edit/edit.component';
import { TopupComponent } from './topup/topup.component';
import { CreateComponent } from './create/create.component';

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
        path: 'edit',
        component: EditComponent,
    },
    {
        path: 'topup/:id',
        component: TopupComponent,
    },
    {
        path: 'create',
        component: CreateComponent,
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(accountRoutes);

@NgModule({
    declarations: [
        ListComponent,
        ViewComponent,
        EditComponent,
        TopupComponent,
        CreateComponent,
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
