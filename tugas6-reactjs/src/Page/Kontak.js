import React, { Component } from 'react'
import Header from "../Page/Header"
import "../Style/Kontak.css"

class Kontak extends Component {
    render() {
        return (
            <div id="kontak_bg">
                <Header/>
                <div className="kontak">
                    <h3>
                        Jl. Raya Bogor DKI Jakarta
                    </h3>
                    <p>098765767678</p>
                </div>
            </div>
        )
    }
}
export default Kontak