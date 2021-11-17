import {Link} from 'react-router-dom'

export const Navbar = () => {

    return (
        <div>
            <Link to='/'>
                Главная
            </Link>
            <Link to='/news'>
                Новости
            </Link>
            <Link to='/profile'>
                Профиль
            </Link>
        </div>
    )
}