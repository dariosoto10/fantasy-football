import React from 'react'
import { shallow } from 'enzyme'
import Home from './homeComponent'
import mockPlayers from '../selectors/mockPlayers'
import '../setupTest'

describe('#homeComponent', () => {
  const mockStatus = {
    requesting: false,
    successful: true,
    errors: ""
  }

  const wrapper = shallow(<Home status={mockStatus} players={mockPlayers} />)

  it('should return a <Table></Table> tag when successful props is true', () => {
    expect(wrapper.find('Table')).toBeTruthy()
  })

  it('should return a <Filters></Filters> tag when successful props is true', () => {
    expect(wrapper.find('Filters')).toBeTruthy()
  })

  const mockStatusReq = {
    requesting: true,
    successful: false,
    errors: ""
  }

  const wrapperReq = shallow(<Home status={mockStatusReq} players={mockPlayers} />)

  it('should return a <Spinner></Spinner> tag when requesting props is false', () => {
    expect(wrapperReq.find('Spinner')).toBeTruthy()
  })
})
