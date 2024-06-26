import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { ToastType } from '@redwoodjs/web/dist/toast'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
