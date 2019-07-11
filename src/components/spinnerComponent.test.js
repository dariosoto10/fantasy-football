import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './spinnerComponent'
import '../setupTest'

describe('#spinnerComponent', () => {
  const wrapper = shallow(<Spinner />)

  it('should return a <div></div> tag', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
})
