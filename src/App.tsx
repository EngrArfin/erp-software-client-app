
import './App.css'
import { AppSidebar } from './components/Home/Shared/AppSidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/*   {children} */}
      </main>
    </SidebarProvider>
  )
}

export default App
