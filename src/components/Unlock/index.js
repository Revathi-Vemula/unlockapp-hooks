import {useState} from 'react'

import {
  UnlockContainer,
  LockImage,
  LockMessage,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(true)

  const lockImgUrl = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const onClickLockButton = () => {
    setLockStatus(prevLockStatus => !prevLockStatus)
  }

  return (
    <UnlockContainer>
      <LockImage src={lockImgUrl} alt={lockStatus ? 'lock' : 'unlock'} />
      <LockMessage>
        Your Device is {lockStatus ? 'Locked' : 'Unlocked'}
      </LockMessage>
      <LockButton type="button" onClick={onClickLockButton}>
        {lockStatus ? 'Unlock' : 'Lock'}
      </LockButton>
    </UnlockContainer>
  )
}

export default Unlock
