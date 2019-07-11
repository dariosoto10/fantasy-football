import React from 'react'
import { shallow } from 'enzyme'
import Filters from './filtersComponent'
import '../setupTest'

describe('#filtersComponent', () => {
  const mockCallback = jest.fn()
  const mockClean = jest.fn()
  const mockPositions = ['keeper', 'defense']
  const wrapper = shallow(<Filters onFilterPlayers={mockCallback} positions={mockPositions} cleanFilters={mockClean} />)

  it('should return a <form></form> tag with inputs, selects and buttons tags', () => {
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('input').length).toBe(2)
    expect(wrapper.find('select').length).toBe(1)
    expect(wrapper.find('button').length).toBe(2)
  })
})
