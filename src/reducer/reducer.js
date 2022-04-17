export default (state, action) => {
  switch(action.type) {
    case 'DELETE_OPERATION':
      return {
        ...state,
        operations: state.operations.filter(operation => operation.id !== action.payload)
      }
      case 'ADD_OPERATION':
        return {
          ...state,
          operations: [action.payload, ...state.operations]
        }
    default:
      return state;
  }
}