import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';
import { faFile, faPlus, faBookmark, faVideo, faTrash, faExternalLink, faPencil, faAlignLeft, faAlignRight, faAlignCenter, faAlignJustify, faUser, faUserPlus, faUserMinus, faUsers, faFilter, faPrint, faBars, faCalendar, faCalendarPlus, faCalendarMinus, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'basic-doc',
    template: ` <section class="py-3">
        <app-docsectiontext [title]="title" [id]="id">
            <p>PanelMenu requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-panelMenu [model]="items" [style]="{ width: '300px' }"></p-panelMenu>
        </div>
        <div class="card flex justify-content-center">
            <p-panelMenu [model]="customIconItems" [style]="{ width: '300px' }">
                <ng-template pTemplate="icon" let-icon>
                    <fa-icon style="margin-right: 6px" [icon]="icon"></fa-icon>
                </ng-template>
            </p-panelMenu>
        </div>
        <app-code [code]="code" selector="panel-menu-basic-demo"></app-code>
    </section>`
})
export class BasicDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];
    customIconItems: any[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                expanded: true,
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            }
        ];

        this.customIconItems = [
            {
                label: 'File',
                icon: faFile,
                expanded: true,
                items: [
                    {
                        label: 'New',
                        icon: faPlus,
                        items: [
                            {
                                label: 'Bookmark',
                                icon: faBookmark
                            },
                            {
                                label: 'Video',
                                icon: faVideo
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: faTrash
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: faExternalLink
                    }
                ]
            },
            {
                label: 'Edit',
                icon: faPencil,
                items: [
                    {
                        label: 'Left',
                        icon: faAlignLeft
                    },
                    {
                        label: 'Right',
                        icon: faAlignRight
                    },
                    {
                        label: 'Center',
                        icon: faAlignCenter
                    },
                    {
                        label: 'Justify',
                        icon: faAlignJustify
                    }
                ]
            },
            {
                label: 'Users',
                icon: faUser,
                items: [
                    {
                        label: 'New',
                        icon: faUserPlus
                    },
                    {
                        label: 'Delete',
                        icon: faUserMinus
                    },
                    {
                        label: 'Search',
                        icon: faUsers,
                        items: [
                            {
                                label: 'Filter',
                                icon: faFilter,
                                items: [
                                    {
                                        label: 'Print',
                                        icon: faPrint
                                    }
                                ]
                            },
                            {
                                icon: faBars,
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: faCalendar,
                items: [
                    {
                        label: 'Edit',
                        icon: faPencil,
                        items: [
                            {
                                label: 'Save',
                                icon: faCalendarPlus
                            },
                            {
                                label: 'Delete',
                                icon: faCalendarMinus
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: faCalendarTimes,
                        items: [
                            {
                                label: 'Remove',
                                icon: faCalendarMinus
                            }
                        ]
                    }
                ]
            }
        ]
    }

    code: Code = {
        basic: `
<p-panelMenu [model]="items" [style]="{'width':'300px'}"></p-panelMenu>`,

        html: `
<div class="card flex justify-content-center">
    <p-panelMenu [model]="items" [style]="{'width':'300px'}"></p-panelMenu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'panel-menu-basic-demo',
    templateUrl: './panel-menu-basic-demo.html'
})
export class PanelMenuBasicDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    { 
                        separator: true 
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            }
        ];
    }
}`
    };
}
