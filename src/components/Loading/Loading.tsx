import { FunctionComponent } from 'react'

import { SCContainer, SCLoadingAnimation } from './styles'

export const Loading: FunctionComponent = () => {
  return (
    <SCContainer>
      <SCLoadingAnimation data-testid='loading-component' />
    </SCContainer>
  )
}
