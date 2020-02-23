import React, { Component } from 'react'


class MenuTentangKami extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tentang : "Warung Nusantara Adlah Restoran yang paling Menjanjikan. dan saya sebagai Developernya"
        }

    }
    
    render() {
        return(
            <div>
                <center>
                    <p>Tentang Kami</p> {this.state.tentang}
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;