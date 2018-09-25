import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateShipmentComponent} from './components/createshipment/createshipment.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {RouterModule, Routes} from '@angular/router';
import {VerifyComponent} from './components/verify/verify.component';

@NgModule({
    declarations: [
        CreateShipmentComponent,
        RedirectComponent,
        VerifyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        CreateShipmentComponent
    ]
})
export class SharedModule {
}
