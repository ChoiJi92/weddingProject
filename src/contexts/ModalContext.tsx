import Modal from '@/components/shared/Modal'
import React, {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defalutValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalProps>(defalutValues)
  const $portal_root = document.getElementById('root-portal')

  const open = useCallback((options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }, [])
  const close = useCallback(() => {
    setModalState(defalutValues)
  }, [])

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close],
  )
  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root && createPortal(<Modal {...modalState} />, $portal_root)}
    </Context.Provider>
  )
}

export const useModalContext = () => {
  const values = useContext(Context)

  if (values === null) {
    throw new Error('ModalContext 안에서 사용해주세요.')
  }

  return values
}
