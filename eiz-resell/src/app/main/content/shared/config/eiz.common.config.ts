import {MatDialogConfig} from '@angular/material';

export class CommonConfig {

    public static getDialogConfig() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.hasBackdrop = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '1000px';
        dialogConfig.maxHeight = '800px';
        dialogConfig.panelClass = 'dialog-container';

        return dialogConfig;
    }
}
