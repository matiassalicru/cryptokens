// Styles
import { SCContainer } from './styles'

// Lottie
import Lottie from 'react-lottie'
import * as animationData from '../../assets/lotties/empty-state.json'

export const EmptyState = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <SCContainer>
      <Lottie options={defaultOptions} isClickToPauseDisabled width={300} />
    </SCContainer>
  )
}
