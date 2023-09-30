import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { StyleDoc } from './styledoc';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, PanelMenuModule, AppDocModule, FontAwesomeModule],
    declarations: [BasicDoc, ImportDoc, MultipleDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class PanelMenuDocModule {}
