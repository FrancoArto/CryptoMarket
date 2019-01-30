import * as GlobalDataActions from './global-data.actions'
import { globalDataMock } from './global-data.mock';

const errorMock = new Error('Error')

describe('Global Data actions', () => {
  it('Should create action for global data request', () => {
    const globalDataRequest = new GlobalDataActions.GlobalDataRequest()

    expect({...globalDataRequest}).toEqual({type: GlobalDataActions.ActionTypes.GlobalDataRequest})
  })

  it('Should create action for global data success', () => {
    const globalDataSuccess = new GlobalDataActions.GlobalDataSuccess({globalData: globalDataMock})

    expect({...globalDataSuccess}).toEqual({type: GlobalDataActions.ActionTypes.GlobalDataSuccess,
      payload: {globalData: globalDataMock}})
  })

  it('Should create action for global data failure', () => {
    const globalDataFailure = new GlobalDataActions.GlobalDataFailure({error: errorMock})

    expect({...globalDataFailure}).toEqual({type: GlobalDataActions.ActionTypes.GlobalDataFailure,
      payload: {error: errorMock}})
  })
})