import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { TemplateDoc } from './templatedoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { InputTextModule } from 'primeng/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenubarModule, InputTextModule, AppDocModule, FontAwesomeModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, TemplateDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenubarDocModule {}
