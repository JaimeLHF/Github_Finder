import Search from '../components/Search/Search';
import User from '../components/User/User';
import Error from '../components/Error/Error';
import { UserProps } from '../types/user';

import { useState } from 'react';
import Loader from '../components/Loader/Loader';

const Home = () => {

    const [user, setUser] = useState<UserProps | null>(null)
    const [erro, setErro] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const loadUser = async (userName: string) => {
        setIsLoading(true)
        setErro(false)
        setUser(null)

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        console.log(data)

        setIsLoading(false)

        if (res.status === 404) {
            setErro(true)
            return
        }
              
        const { avatar_url, login, location, followers, following } = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        };

        setUser(userData)

    }
    return (
        <div>
            <Search loadUser={loadUser} />
            {isLoading && <Loader />}
            {user && <User {...user} />}
            {erro && <Error />}
        </div>
    )
}

export default Home;
