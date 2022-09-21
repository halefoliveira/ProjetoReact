import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg'
import { Route, Routes } from 'react-router-dom';
const Auth = () => {

    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Divulgue seus produtos no DS Catalog</h1>
                <p>Faça parte do nosso catálago de divulgação e aumente a venda dos seus profutos.</p>
                <AuthImage />
            </div>
            <div className='auth-form-container'>
                <Routes>
                    <Route path="login" element={<h1>Card de login</h1>} />
                    <Route path="singup" element={<h1>Card de SingUp</h1>} />
                    <Route path="recover" element={<h1>Card de Recover</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export default Auth;