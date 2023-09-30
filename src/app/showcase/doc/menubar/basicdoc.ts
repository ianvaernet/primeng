import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';
import { faFile, faPlus, faBookmark, faVideo, faTrash, faExternalLink, faPencil, faAlignLeft, faAlignRight, faAlignCenter, faAlignJustify, faUser, faUserPlus, faUserMinus, faUsers, faFilter, faPrint, faBars, faCalendar, faCalendarPlus, faCalendarMinus, faCalendarTimes, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'basic-doc',
    template: ` <section class="py-3">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Menubar requires nested menuitems as its model.</p>
        </app-docsectiontext>
        <div class="card">
            <p-menubar [model]="items"></p-menubar>
        </div>
        <div class="card">
            <p-menubar [model]="customIconItems">
                <ng-template pTemplate="icon" let-icon>
                    <fa-icon style="margin-right: 6px" [icon]="icon"></fa-icon>
                </ng-template>
            </p-menubar>
        </div>
        <app-code [code]="code" selector="menubar-basic-demo"></app-code>
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
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];

        this.customIconItems = [
            {
                label: 'File',
                icon: faFile,
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
            },
            {
                label: 'Quit',
                icon: faPowerOff
            }
        ]
    }

    code: Code = {
        basic: `
<p-menubar [model]="items"></p-menubar>`,

        html: `
<div class="card">
    <p-menubar [model]="items"></p-menubar>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menubar-basic-demo',
    templateUrl: './menubar-basic-demo.html'
})
export class MenubarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

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
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}`
    };
}
