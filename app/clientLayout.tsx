"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientWrapper } from "@/components/client-wrapper"
import { PersistentGojoLoadingScreen } from "@/components/persistent-gojo-loading-screen"
import { GlobalLoadingProvider, useGlobalLoading } from "@/components/global-loading-context"
import { ComprehensiveAssetPreloader } from "@/components/comprehensive-asset-preloader"
import { ErrorBoundary } from "@/components/error-boundary"
import { AssetErrorHandler } from "@/components/asset-error-handler"
import { NetworkStatusHandler } from "@/components/network-status-handler"

interface Props {
  children: React.ReactNode
}

function AppContent({ children }: Props) {
  const [showMainContent, setShowMainContent] = useState(false)
  const { loadingState, setLoadingScreenShown } = useGlobalLoading()

  // Check if loading screen should be shown
  useEffect(() => {
    if (loadingState.hasShownLoadingScreen) {
      setShowMainContent(true)
    }
  }, [loadingState.hasShownLoadingScreen])

  const handleLoadingComplete = () => {
    setLoadingScreenShown()
    setShowMainContent(true)
  }

  // Show loading screen only if it hasn't been shown before and content isn't ready
  if (!showMainContent && !loadingState.hasShownLoadingScreen) {
    return (
      <>
        <ComprehensiveAssetPreloader />
        <PersistentGojoLoadingScreen
          progress={loadingState.progress}
          totalAssets={loadingState.totalAssets}
          loadedAssets={loadingState.loadedAssets}
          isComplete={loadingState.isComplete}
          failedAssets={loadingState.failedAssets}
          onLoadingComplete={handleLoadingComplete}
        />
      </>
    )
  }

  return (
    <ErrorBoundary>
      <AssetErrorHandler />
      <NetworkStatusHandler />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ClientWrapper>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default function ClientLayout({ children }: Props) {
  return (
    <GlobalLoadingProvider>
      <AppContent>{children}</AppContent>
    </GlobalLoadingProvider>
  )
}
