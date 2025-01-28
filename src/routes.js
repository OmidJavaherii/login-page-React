import RecoveryPass from "./components/RecoveryPass/RecoveryPass"
import LoginPage from "./components/LoginPage/LoginPage"
import Register from "./components/Register/Register"

const routes = [
    {path: '/recovery', element: <RecoveryPass />},
    {path: '/register', element: <Register />},
    {path: '/', element: <LoginPage />},
]

export default routes;