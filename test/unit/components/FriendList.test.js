import '../setupDOM';
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';
import FriendList from '../../../src/client/assets/javascripts/features/friends/components/FriendList';

expect.extend(enzymify());

describe('FriendList', function() {
  it('should be a string.', function() {
    expect('A').toBeA('string');
  });

  it('should exist', function() {
    const wrapper = mount(<FriendList actions={{}} friends={[]}/>);
    expect(wrapper).toExist();
  });
});
