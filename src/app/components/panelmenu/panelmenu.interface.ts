import { TemplateRef } from '@angular/core';

/**
 * Defines valid templates in PanelMenu.
 * @group Templates
 */
export interface PanelMenuTemplates {
    /**
     * Custom template of icon.
     * @param {Object} context - item data.
     */
    icon(context: {
        /**
         * Item icon.
         */
        $implicit: any;
    }): TemplateRef<{ $implicit: any }>;
    /**
     * Custom template of submenuicon.
     */
    submenuicon(): TemplateRef<any>;
}
