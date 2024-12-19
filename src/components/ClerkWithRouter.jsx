import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import App from './../App';

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export const ClerkWithRouter = () => {
    const navigate = useNavigate()
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" navigate={(to)=>navigate(to)}>
      <App />
    </ClerkProvider>
  )
}