import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dasboard/Dasboard'
import Erro404 from '../components/Errors/Erro404.jsx'
import Detail from '../components/Detail/Detail.jsx'
import ProtectedRoute from './ProtectedRoute'
import { Provider } from 'react-redux'
import store from '../redux/store'
import MyFavorite from '../components/MyFavorite/MyFavorite'
import Register from '../components/Login/Register'
import Login from '../components/Login/Login'

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/details/:id' element={<Detail />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/favorite' element={<MyFavorite />} />
          </Route>
          <Route path='*' element={<Erro404 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default Router
