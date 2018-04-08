import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ResumeComponent } from '../resume/resume.component';
import { SourceCodeComponent } from '../source-code/source-code.component';

const routes: Routes =
    [
        { path: '', component: HomeComponent  },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'home', redirectTo: '/', pathMatch: 'full'},
        { path: 'resume', component: ResumeComponent },
        { path: 'source', component: SourceCodeComponent },
        { path: '**', component: NotFoundComponent },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }