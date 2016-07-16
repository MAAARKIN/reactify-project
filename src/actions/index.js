import * as types from '../constants/ActionTypes'

/*
 * action creators
 */

export function addMessage(message) {
  return { type: types.ADD_MESSAGE, message }
}

export function listMessages() {
  return { type: types.LIST_ALL_MESSAGES }
}