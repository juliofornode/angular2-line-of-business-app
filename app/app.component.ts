import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component ({
    selector: 'pm-app',
    template: `
    <h3>{{ pageTitle }}</h3>
    <pm-products></pm-products>
    `,
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = 'Product Management App'
}