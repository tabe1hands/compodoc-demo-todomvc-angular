import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainSectionComponent } from './main-section.component';

import { ListModule } from '../list/';
import { FooterModule } from '../footer/';

/**
 * The header module
 *
 */
@NgModule({
    declarations: [
        MainSectionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        ListModule,
        FooterModule,
    ],
    exports: [MainSectionComponent]
})
export class MainSectionModule { }
