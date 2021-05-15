import React from 'react'
import { Route, Redirect} from 'react-router-dom'

const ReDirect = () => {
    return <Redirect to="/login" />
}

const GuardedRoute = ({path, children, valid, exact}) => {
    return (
        <Route
            path={path}
            exact={exact}
        >    
        {valid ? children : ReDirect}
        </Route>
    )
}

export default GuardedRoute