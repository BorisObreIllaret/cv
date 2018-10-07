import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceCodeComponent } from './source-code.component';

const sourceCodeRoutes: Routes =
[
    { path: '', component: SourceCodeComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(sourceCodeRoutes)],
})
export class SourceCodeRoutingModule { }