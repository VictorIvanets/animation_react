import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.sass"
import ThemeProvider from "./Providers/Theme/ThemeProvider.tsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./Providers/router/router.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
