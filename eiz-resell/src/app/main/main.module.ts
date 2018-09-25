import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SharedModule} from './content/shared/shared.module';
import {ContentComponent} from './content/content.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './content/public/login/login.component';

@NgModule({
    declarations: [
        ContentComponent,
        ToolbarComponent,
        MainComponent,
        LoginComponent
    ],
    imports: [
        RouterModule,
        SharedModule
    ],
    entryComponents: [
        LoginComponent
    ],
    exports: [
        MainComponent,
        RouterModule
    ]
})
export class MainModule {
}
