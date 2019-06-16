import { Observable } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatSnackBar } from '@angular/material';

import { RecaptchaComponent } from 'ng-recaptcha';

import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactService } from './contact.service';
import { HtmlHeaderService } from '../core/html-header.service';
import { RecaptchaApiResponse } from './recaptcha.model';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit
{
    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : Contact`;
    private readonly COMPONENT_DESCRIPTION = `Contactez-moi via LinkedIn, Viadeo, Email ou Skype.`;
    private readonly COMPONENT_KEYWORDS = `contact, boris, obre-illaret, linkedin, viadeo, email, skype`;

    isLoading$: Observable<boolean>;
    isButtonDisabled: boolean = true;

    private recaptchaToken: string;
    @ViewChild(RecaptchaComponent, {static: false}) recaptchaRef: RecaptchaComponent;

    constructor(private htmlHeader: HtmlHeaderService,
                private uiService: UIService,
                private contactService: ContactService,
                public dialog: MatDialog,
                public snackBar: MatSnackBar) { }

    ngOnInit()
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);

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
