import { Chrome } from 'navalia';
const pageUrl = 'http://localhost:3000/';

describe('Home Page', () => {
  let chrome = {};

  // Setup a clean instance for each test
  beforeEach(() => {
    chrome = new Chrome();
  });

  // Tear down for each test
  afterEach(() => {
    return chrome.done();
  });

  it('should have a email input', () => {
    return chrome.goto(pageUrl)
      .then(() => chrome.exists('[name="email"]'))
      .then((exists) => expect(exists).toEqual(true));
  });
});