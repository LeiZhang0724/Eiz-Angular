import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminNavbarComponent} from './adminnavbar/adminnavbar.component';
import {OpenmanifestComponent} from './openmanifest/openmanifest.component';
import {ClosedmanifestComponent} from './closedmanifest/closedmanifest.component';
import {ConsignmentsComponent} from './consignments/consignments.component';
import {CreateshipmentComponent} from './create-shipment/createshipment.component';
import {UploadShipmentComponent} from './upload-shipment/upload-shipment.component';
import {AuthGuard} from '../shared/service/auth.guard';
import { ListComponent } from './account/list/list.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: '',
        component: AdminNavbarComponent,
        outlet: 'adminsidebar',
        // canActivate: [AuthGuard]
    },
    {
        path: 'openmanifest',
        component: OpenmanifestComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'closedmanifest',
        component: ClosedmanifestComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'createshipment',
        component: CreateshipmentComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'uploadshipment',
        component: UploadShipmentComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'openmanifest/:id',
        component: ConsignmentsComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        // canActivate: [AuthGuard]
    },
    // {
    //     path: 'consignments',
    //     component: ConsignmentsComponent
    // }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(adminRoutes);

@NgModule({
    declarations: [
        DashboardComponent,
        AdminNavbarComponent,
        OpenmanifestComponent,
        ClosedmanifestComponent,
        ConsignmentsComponent,
        CreateshipmentComponent,
        UploadShipmentComponent,
    ],
    imports: [
        RouterModule.forChild(adminRoutes),
        RoutingModule,
        SharedModule
    ],
    entryComponents: [],
    providers: [],
    exports: [
        RouterModule
    ],
})
export class ProtectedModule {
}
