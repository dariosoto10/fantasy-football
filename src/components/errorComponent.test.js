import React from 'react'
import { shallow } from 'enzyme'
import Error from './errorComponent'
import '../setupTest'

describe('#errorComponent', () => {
  const message = 'error'
  const wrapper = shallow(<Error message={message} />)

  it('should return a <p></p> tag with the correct message', () => {
    expect(wrapper.find('p').text()).toEqual(message)
    expect(wrapper.find('p').length).toBe(1)
  })
})
