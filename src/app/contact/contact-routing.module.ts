import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes =
[
    { path: '', component: ContactComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(contactRoutes)],
})
export class ContactRoutingModule { }