// Simon: This import was in the index.js example from:
// https://github.com/vogloblinsky/angular-elements-demo
// import '@webcomponents/custom-elements/src/native-shim';

import { BrowserModule } from '@angular/platform-browser';

// Simon: Included import for 'Injector'
import { NgModule, Injector } from '@angular/core';

// Simon: Included import for 'createCustomElement'
import { createCustomElement } from '@angular/elements';

// Simon: Commented 'AppComponent'
// import { AppComponent } from './app.component';

import { ButtonComponent } from './button/button.component';

// Simon: 
// - In the below, removed declaration for 'AppComponent' - just leaving the ButtonComponent that we want to create an element for.
// - Also removed the 'providers' array declaration.
// - Added entryComponents for the ButtonComponent that we want to create an element for.
// - Removed bootstrap: [AppComponent]
@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ButtonComponent]
})

// Simon: Added body of the AppModule to declare the custom element.
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {} 
}