import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from "../src/App"
import MenuMakanan from "../src/Page/MenuMakanan"
import MenuMinuman from "../src/Page/MenuMinuman"
import Kontak from "../src/Page/Kontak"

const AppRoute = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/menu-makanan" component={MenuMakanan} />
                <Route path="/menu-minuman" component={MenuMinuman} />
                <Route path="/kontak" component={Kontak} />
            </div>
        </Router>
    )
}

export default AppRoute