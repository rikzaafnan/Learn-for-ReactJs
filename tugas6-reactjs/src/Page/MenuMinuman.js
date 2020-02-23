import React, { Component } from 'react'
import DaftarMinuman from "../Lib/DaftarMinuman"
import Header from "../Page/Header"

class MenuMinuman extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h3>Daftar Minuman Favorite</h3>
                <table style={{width:"100%"}} >
                    <tr>
                        { DaftarMinuman.map((data, index) => {
                            return (
                                <td key={index} >
                                    <center>
                                        <img
                                            src={data.urlGambar}
                                            alt="Product Minuman"
                                            width="150"
                                            height="100"
                                        />
                                        <p>{data.namaMinuman}</p>
                                        <p>harga: Rp.{data.harga}</p>
                                    </center>
                                </td>
                            )
                        }) }
                    </tr>
                </table>   
            </div>
        )
    }
}

export default MenuMinuman