import React, { Component } from 'react'

class MenuKontak extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alamat : "Jl.Condet Raya Kelurahan condet deket Taman Condet yang punya asli Condet jakarta Timur",
            telpon : "021-09871234"
        }
    }
    
    render() {

        return(
            <div>
                <center>
                    <p>{this.state.alamat}</p> Kontak Kami : {this.state.telpon} 
                </center>
            </div>
        )

    }
}

export default MenuKontak;