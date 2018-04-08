import { Subscription, Observable } from 'rxjs';

import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { RecaptchaComponent } from 'ng-recaptcha';

import { UIService } from '../shared/ui.service';
import { ContactService } from './contact.service';
import { RecaptchaApiResponse } from './recaptcha.model';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@Component({
    selector: 'cv-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit
{
    isLoading$: Observable<boolean>;
    isButtonDisabled: boolean = true;

    private recaptchaToken: string;
    @ViewChild(RecaptchaComponent) recaptchaRef: RecaptchaComponent;
    
    constructor(private uiService: UIService,
                private contactService: ContactService,
                public dialog: MatDialog,
                public snackBar: MatSnackBar) { }

    ngOnInit()
    {
        this.isLoading$ = this.uiService.storeSelectIsLoading();
        this.isButtonDisabled = true;
    }

    onRecaptchaResolved(token): void
    {
        if (token)
        {
            this.recaptchaToken = token;
            this.isButtonDisabled = false;
        }

        else
        {
            this.isButtonDisabled = true;
        }
    }

    onContactClick(): void
    {
        this.contactService.validaterecaptcha(this.recaptchaToken)
            .subscribe(
                (response: RecaptchaApiResponse) => {
                    let dialogRef = this.dialog.open(ContactDialogComponent, {
                        height: 'auto',
                        width: '400px',
                        data: { ...response.data },
                    });

                    dialogRef.afterClosed().subscribe(
                        (result) => {
                            if (this.recaptchaRef) this.recaptchaRef.reset();
                        }
                    );
                },
                (error) => this.snackBar.open(`Une erreur s'est produite : ${error}`)
            );
    }
}