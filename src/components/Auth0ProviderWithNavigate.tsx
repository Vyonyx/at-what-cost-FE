import { Auth0Provider, AppState } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function Auth0ProviderWithNavigate({children}: Props) {
  const navigate = useNavigate()

  const domain: string = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId: string = import.meta.env.VITE_AUTH0_CLIENT_ID

  if (!(domain && clientId)) {
    return null
  }
  
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/callback`}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname)
      }}
    >
      {children}
    </Auth0Provider>
  )
}
export default Auth0ProviderWithNavigate