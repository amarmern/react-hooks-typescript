import {useState} from 'react'
type AuthUser = {
    name: string,
    email : string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser)
    const handleLogin = () => {
        setUser({name: 'amrendra',email: 'amarmca51@gmail.com'})
    }
    const handleLogout = () => {setUser(null)}
    return(<div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>user name {user?.name}</div>
        <div>user email {user?.email}</div>
    </div>)
}