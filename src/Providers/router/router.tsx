import { Suspense } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Layout from "../../pages/layout/layout"
import { PreLoaderGradient, PreLoader } from "../../widgets/PreLoader"
import { TheSplashScreen } from "../../pages/TheSplashScreen"
import { StartPage } from "../../pages/startpage"
import { SomeScreen } from "../../pages/somescreen"
import { TestPage } from "../../pages/testpage"
import { CalcPage } from "../../pages/calcpage"
import { ImagePage } from "../../pages/imagepage"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/somescreen" replace /> },
        {
          path: "somescreen",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <SomeScreen />
            </Suspense>
          ),
        },
        {
          path: "start",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <StartPage />
            </Suspense>
          ),
        },
        {
          path: "splashscreen",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <TheSplashScreen />
            </Suspense>
          ),
        },
        {
          path: "test",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <TestPage />
            </Suspense>
          ),
        },
        {
          path: "calc",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <CalcPage />
            </Suspense>
          ),
        },
        {
          path: "image",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <ImagePage />
            </Suspense>
          ),
        },
        {
          path: "preloader",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <PreLoaderGradient />
            </Suspense>
          ),
        },
        {
          path: "splash",
          element: (
            <Suspense fallback={<PreLoaderGradient />}>
              <TheSplashScreen />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: "*",
      element: (
        <Suspense fallback={<PreLoader />}>
          <Layout />
        </Suspense>
      ),
    },
  ],

  {
    basename: "/animation_react",
  }
)
