import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', () => {

  beforeEach(async () => {
    await browser.get('/');
    await element(by.linkText('Home')).click();
  });

});
