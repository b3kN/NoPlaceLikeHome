import { browser, by, element } from 'protractor';
import 'tslib';

describe('About', () => {

  beforeEach(async () => {
    await browser.get('/');
    await element(by.linkText('About')).click();
  });

});
