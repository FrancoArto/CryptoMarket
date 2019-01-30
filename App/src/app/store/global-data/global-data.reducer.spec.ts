import * as GlobalDataReducer from './global-data.reducer'
import * as GlobalDataActions from './global-data.actions'
import { globalDataMock } from './global-data.mock';

const errorMock = new Error('Error')

describe('Global Data reducer', () => {
  describe('Undefined action', () => {
    it('Should return initialState', () => {
      const { globalDataInitialState } = GlobalDataReducer
      const action = {}
      const state = GlobalDataReducer.globalDataReducer(undefined, action)

      expect(state).toEqual(globalDataInitialState)
    })
  })

  describe('Request action', () => {
    it('Should set loading to true', () => {
      const { globalDataInitialState } = GlobalDataReducer
      const action = {}
      const state = GlobalDataReducer.globalDataReducer(globalDataInitialState,
        new GlobalDataActions.GlobalDataRequest())

      expect(state.loading).toBeTruthy()
    })
  })

  describe('Success action', () => {

    const { globalDataInitialState } = GlobalDataReducer
      const action = {}
      const state = GlobalDataReducer.globalDataReducer(globalDataInitialState,
        new GlobalDataActions.GlobalDataSuccess({globalData: globalDataMock}))

    it('Should set globalData with action payload', () => {
      expect(state.globalData).toEqual(globalDataMock)
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })
  })

  describe('Failure action', () => {
    const { globalDataInitialState } = GlobalDataReducer
      const action = {}
      const state = GlobalDataReducer.globalDataReducer(globalDataInitialState,
        new GlobalDataActions.GlobalDataFailure({error: errorMock}))

    it('Should set globalData to null', () => {
      expect(state.globalData).toBeNull()
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })

    it('Should set error with action payload', () => {
      expect(state.error).toEqual(errorMock)
    })
  })
})