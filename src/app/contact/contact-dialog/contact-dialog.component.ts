import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'cv-contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit
{
    email: string = '';
    mailToUrl: string = '';
    skypeUrl: SafeUrl;
    
    constructor(public dialogRef: MatDialogRef<ContactDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private dialogData: any,
                private sanitizer: DomSanitizer) { }

    ngOnInit(): void
    {
        if (this.dialogData.email)
        {
            this.email = this.dialogData.email;
            this.mailToUrl = `mailto:${this.dialogData.email}`;
        }
        
        if (this.dialogData.skype)
        {
            this.skypeUrl = this.sanitizer.bypassSecurityTrustUrl(`skype:${this.dialogData.skype}?chat`);
        }
    }
}
