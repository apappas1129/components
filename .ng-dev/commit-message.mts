import {CommitMessageConfig} from '@angular/ng-dev';

/**
 * The configuration for `ng-dev commit-message` commands.
 */
export const commitMessage: CommitMessageConfig = {
  maxLineLength: Infinity,
  minBodyLength: 0,
  minBodyLengthTypeExcludes: ['docs'],
  scopes: [
    'multiple', // For when a commit applies to multiple components.
    'cdk-experimental/column-resize',
    'cdk-experimental/combobox',
    'cdk-experimental/listbox',
    'cdk-experimental/popover-edit',
    'cdk-experimental/scrolling',
    'cdk-experimental/selection',
    'cdk-experimental/table-scroll-container',
    'cdk/a11y',
    'cdk/accordion',
    'cdk/bidi',
    'cdk/clipboard',
    'cdk/coercion',
    'cdk/collections',
    'cdk/dialog',
    'cdk/drag-drop',
    'cdk/keycodes',
    'cdk/layout',
    'cdk/menu',
    'cdk/observers',
    'cdk/overlay',
    'cdk/platform',
    'cdk/portal',
    'cdk/schematics',
    'cdk/scrolling',
    'cdk/stepper',
    'cdk/table',
    'cdk/testing',
    'cdk/text-field',
    'cdk/tree',
    'google-maps',
    'material-experimental/column-resize',
    'material-experimental/mdc-button',
    'material/card',
    'material/checkbox',
    'material-experimental/mdc-core',
    'material/dialog',
    'material/form-field',
    'material/input',
    'material-experimental/mdc-list',
    'material-experimental/mdc-menu',
    'material-experimental/mdc-paginator',
    'material/progress-bar',
    'material-experimental/mdc-progress-spinner',
    'material-experimental/mdc-radio',
    'material/slide-toggle',
    'material-experimental/mdc-slider',
    'material-experimental/mdc-snack-bar',
    'material-experimental/mdc-table',
    'material-experimental/mdc-tabs',
    'material-experimental/mdc-tooltip',
    'material-experimental/menubar',
    'material-experimental/popover-edit',
    'material-experimental/selection',
    'material-moment-adapter',
    'material-date-fns-adapter',
    'material-luxon-adapter',
    'material/autocomplete',
    'material/legacy-autocomplete',
    'material/badge',
    'material/bottom-sheet',
    'material/button',
    'material/button-toggle',
    'material/legacy-card',
    'material/legacy-checkbox',
    'material/legacy-checkbox',
    'material/chips',
    'material/legacy-chips',
    'material/core',
    'material/legacy-core',
    'material/datepicker',
    'material/legacy-dialog',
    'material/divider',
    'material/expansion',
    'material/form-field',
    'material/legacy-form-field',
    'material/grid-list',
    'material/icon',
    'material/legacy-input',
    'material/list',
    'material/menu',
    'material/paginator',
    'material/prebuilt-themes',
    'material/legacy-prebuilt-themes',
    'material/legacy-progress-bar',
    'material/progress-spinner',
    'material/radio',
    'material/schematics',
    'material/select',
    'material/legacy-select',
    'material/sidenav',
    'material/legacy-slide-toggle',
    'material/slider',
    'material/snack-bar',
    'material/sort',
    'material/stepper',
    'material/table',
    'material/tabs',
    'material/testing',
    'material/theming',
    'material/toolbar',
    'material/legacy-tooltip',
    'material/tooltip',
    'material/tree',
    'youtube-player',
  ],
};
