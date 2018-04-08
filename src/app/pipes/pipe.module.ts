import { NgModule } from '@angular/core';

import { KeepHtmlPipe } from './keep-html.pipe';

const pipes =
[
    KeepHtmlPipe,
];

@NgModule({
    declarations: pipes,
    exports: pipes,
})
export class PipeModule
{
    static forRoot()
    {
        return { ngModule: PipeModule, providers: pipes };
    }
}