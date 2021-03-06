var path = require('path');

describe('angularjs homepage todo list', function() {
  it('should add a new contact', function() {
    browser.get('http://localhost:8080');

    element(by.css('[class="button"]')).click();

    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);

    expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
    expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
  });
});