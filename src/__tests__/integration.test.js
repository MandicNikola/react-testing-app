import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'FETCHED #1' }, { name: 'FETCHED #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list comments and display them', done => {
  // RENDER ALL APP
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find 'fetchComments' and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments!
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
