import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, Info } from "lucide-react"

interface ToastProps {
  type: "success" | "error" | "info"
  message: string
  show: boolean
  onClose: () => void
}

export default function Toast({ type, message, show, onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle className="text-gold-400" size={18} />,
    error: <XCircle className="text-sunset-500" size={18} />,
    info: <Info className="text-mist-300" size={18} />,
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="status"
          className="pixel-border fixed bottom-8 right-8 flex items-center gap-3 px-5 py-3 bg-dusk-900 text-cream-100 z-50"
        >
          {icons[type]}
          <span className="font-body text-sm">{message}</span>
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="ml-3 text-mist-300 hover:text-cream-100 transition"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
