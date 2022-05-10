const waitToNavigate = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Bad Character', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('click on character', async () => {
    await element(by.id('itemID0')).tap();
  });
  it('seach any character', async () => {
    await element(by.id('input')).tap();
    await element(by.id('input')).replaceText('Walter');
    await element(by.id('clearSearch')).tap();
  });

  it('filter search', async () => {
    await element(by.id('filter')).tap();
    await element(by.id('selectSeason')).tap();
    await element(by.id('item0')).tap();
    await element(by.id('Apply')).tap();
  });
});
