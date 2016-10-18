import { browser, element, by } from 'protractor';

export class TnrPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tnr-root h1')).getText();
  }
}
