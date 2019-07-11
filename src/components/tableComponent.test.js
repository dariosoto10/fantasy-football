import React from 'react'
import { shallow } from 'enzyme'
import Table from './tableComponent'
import mockPlayers from '../selectors/mockPlayers'
import '../setupTest'

describe('#tableComponent', () => {
  const wrapper = shallow(<Table showPlayers={mockPlayers} />)

  it('should return a <table></table> tag', () => {
    expect(wrapper.find('table')).toBeTruthy()
  })
})
