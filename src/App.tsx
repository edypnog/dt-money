import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyles } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

    function handleOpenNewTransaction(){
      setIsModalOpen(true)
    }
      
    function handleCloseNewTransaction(){
      setIsModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header onNewTransactionModalOpen={handleOpenNewTransaction} />     

      <NewTransactionModal isOpen={isModalOpen} onRequestClose={handleCloseNewTransaction} />

      <Dashboard />
      
      <GlobalStyles />
    </TransactionsProvider>
  )
}
