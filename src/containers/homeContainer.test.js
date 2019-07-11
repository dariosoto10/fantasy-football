import React from 'react'
import { shallow } from 'enzyme'
import HomeContainer from './homeContainer'
import configureMockStore from 'redux-mock-store'
import '../setupTest'

const mockStore = configureMockStore()

describe('#homeContainer', () => {
  let wrapper, store

  beforeEach(() => {
    const mockParameters = {
      playersReducer: {
        players: [
          {
            name: 'fantasy',
            position: 'keeper'
          },
          {
            name: 'football',
            position: 'defense'
          }
        ],
        filterOptions: {},
        successful: false,
        requesting: false,
        errors: ''
      }
    }
    store = mockStore(mockParameters)
    wrapper = shallow(<HomeContainer store={store} />)
  })

  it('#props should have the correct props', () => {
    expect(typeof wrapper.props().children.props.status).toBe('object')
    expect(Array.isArray(wrapper.props().children.props.players)).toBe(true)
    expect(typeof wrapper.props().children.props.isUserFiltering).toBe('boolean')
  })

  it('#layout should return the Home layout', () => {
    expect(wrapper.find('Home')).toBeTruthy()
  })
})
