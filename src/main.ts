import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { AppComponent } from './app/app.component';
import { DisplayFormDataComponent } from './app/display-form-data/display-form-data.component';
import { appConfig } from './app/app.config';

(async () => {
  const appRef: ApplicationRef = await createApplication(appConfig);

  const ReactiveFormElement = createCustomElement(DisplayFormDataComponent, {
    injector: appRef.injector,
  });

  customElements.define('mfe2-display-form-data', ReactiveFormElement);
  // appRef.bootstrap(AppComponent);  // comment this line when creating the build
  console.log('MFE2 bootstrapped and custom element registered');

})().catch((err) => console.error('Error bootstrapping MFE2:', err));
