import { Component } from 'angular2/core';

@Component ({
    selector: 'pm-app',
    template: '<p>{{ pageTitle }}</p>'
})

export class AppComponent {
    pageTitle: string = 'Product Management App'
}