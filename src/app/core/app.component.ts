import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'cv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    constructor(private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer)
    {
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/book.svg'));
        iconRegistry.addSvgIcon('circle-viadeo', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/circle-viadeo.svg'));
        iconRegistry.addSvgIcon('city-buildings', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/city-buildings.svg'));
        iconRegistry.addSvgIcon('editor', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/editor.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/github.svg'));
        iconRegistry.addSvgIcon('graduate-cap', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/graduate-cap.svg'));
        iconRegistry.addSvgIcon('job', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/job.svg'));
        iconRegistry.addSvgIcon('hash', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/hash.svg'));
        iconRegistry.addSvgIcon('hat', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/hat.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin-logo.svg'));
        iconRegistry.addSvgIcon('resume', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/resume.svg'));
        iconRegistry.addSvgIcon('square-linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/square-linkedin.svg'));
        iconRegistry.addSvgIcon('tie', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/tie.svg'));
        iconRegistry.addSvgIcon('viadeo', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/viadeo-logo.svg'));
    }
}