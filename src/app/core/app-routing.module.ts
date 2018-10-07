import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SourceCodeComponent } from '../source-code/source-code.component';

const routes: Routes =
    [
        // { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'about', loadChildren: '../about/about.module#AboutModule' },
        { path: 'contact', loadChildren: '../contact/contact.module#ContactModule' },
        { path: 'resume', loadChildren: '../resume/resume.module#ResumeModule' },
        { path: 'source', loadChildren: '../source-code/source-code.module#SourceCodeModule' },
        { path: '', component: HomeComponent },
        { path: '**', component: NotFoundComponent },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }