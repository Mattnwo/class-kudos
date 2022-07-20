import { Dialog } from '@headlessui/react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

const StyledDialog = ({
  children,
  isOpen,
  onClose,
  title,
  description,
}: DialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="dialog">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="dialog-panel">
          <Dialog.Title className="dialog-title">{title}</Dialog.Title>
          <Dialog.Description className="dialog-description">
            {description}
          </Dialog.Description>
          <div className="dialog-content">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default StyledDialog
