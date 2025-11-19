import React from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioSkeleton from './PortfolioSkeleton'
import './index.css' // 如果你有其他全局样式可以保留

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioSkeleton />
  </React.StrictMode>
)
