import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import Button from '../Button/Button';

const Header = () => {
    const {tg, onClose} = useTelegram();
    
  return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>{tg.initDataUnsafe?.user?.first_name}</span>
    </div>
  )
}

export default Header
