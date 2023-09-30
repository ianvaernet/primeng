import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'basic-doc',
    template: ` <section class="py-3">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-menu [model]="items"></p-menu>
        </div>
        <div class="card flex justify-content-center">
            <p-menu [model]="customIconItems">
                <ng-template pTemplate="icon" let-icon>
                    <fa-icon style="margin-right: 6px" [icon]="icon"></fa-icon>
                </ng-template>
            </p-menu>
        </div>
        <app-code [code]="code" selector="menu-basic-demo"></app-code>
    </section>`
})
export class BasicDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[] | undefined;
    customIconItems: any[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            }
        ];

        this.customIconItems = [
            {
                label: 'New',
                icon: faPlus
            },
            {
                label: 'Delete',
                icon: faTrash
            }
        ];
    }

    code: Code = {
        basic: `
<p-menu [model]="items"></p-menu>`,

        html: `
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menu-basic-demo',
    templateUrl: './menu-basic-demo.html'
})
export class MenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            }
        ];
    }
}`
    };
}
