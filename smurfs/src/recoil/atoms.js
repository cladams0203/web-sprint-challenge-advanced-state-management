import { atom } from 'recoil'

export const smurfState = atom({
  key: 'smurfState',
  default: {
    smurfs: [],
    loading: '',
    error: ''
  }
})