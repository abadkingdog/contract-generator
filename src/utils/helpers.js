import get from 'lodash/get'
import find from 'lodash/find'
import isEmpty from 'is-empty'

export const detectTypeComponent = (configs, targetType) => {
  let component = get(find(configs, ['type', targetType]), 'component')
  if (isEmpty(component)) {
    component = get(find(configs, 'default'), 'component')
  }
  return component
}
