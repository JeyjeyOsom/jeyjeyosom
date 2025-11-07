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
    success: <CheckCircle className="text-green-400" size={20} />,
    error: <XCircle className="text-red-400" size={20} />,
    info: <Info className="text-blue-400" size={20} />,
  }

  const bgColors = {
    success: "bg-green-950/90 border-green-700/40",
    error: "bg-red-950/90 border-red-700/40",
    info: "bg-blue-950/90 border-blue-700/40",
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed bottom-8 right-8 flex items-center gap-3 px-5 py-3 rounded-xl border text-white shadow-lg backdrop-blur-md ${bgColors[type]} z-50`}
        >
          {icons[type]}
          <span className="text-sm">{message}</span>
          <button
            onClick={onClose}
            className="ml-3 text-gray-400 hover:text-gray-200 transition"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
