import { useState } from 'react'
import './App.css'
import DynamicCard from './components/BakeryItemCard/Cards'
import Routes from './routes'
import { Provider } from 'react-redux';
import Toast from './components/Toast'
import { store } from '../src/store/index';
import Modal from './components/Modal';




function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Provider store={store}>
        <Routes />
      <Toast />

      </Provider>

    </>
  )
}

export default App
