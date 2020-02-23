import React, { Component } from 'react'
import DaftarMakanan from '../Lib/DaftarMakanan'
import FormMakanan from '../Form/FormMakanan'


const Listmakanan = [
    {
        NamaMakanan: "Nasi Padang",
        Harga: "20.000",
    },
    {
        NamaMakanan: "Sate",
        Harga: "20.000",
        
    },
    {
        NamaMakanan: "Soto",
        Harga: "10.000",
    }, 
    {
        NamaMakanan: "Uduk",
        Harga: "10.000",
    },
    {
        NamaMakanan: "Nai Kuning",
        Harga: "15.000",
    },
    {
        NamaMakanan: "Ayam Geprek",
        Harga: "15.000",
    },
    {
        NamaMakanan: "Pecel Lele",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Pecel",
        Harga: "10.000",
    },
    {
        NamaMakanan: "Mie Ayam",
        Harga: "10.000",
    }
]

class MenuMakanan extends Component {
    render() {
        return(
            <div>
                <h3>Daftar Makanan Favourite</h3>

                <table>
                    <tbody>
                        <tr>
                            {
                                DaftarMakanan.map((data, index) => {
                                    return(
                                        <td key={index} >
                                            <img src={data.img} 
                                                alt ="Product Makanan"
                                                width="150"
                                                height="100"
                                            />
                                            
                                            <center>
                                                <p>{data.namaMakanan}</p>

                                                <p>Harga : Rp {data.harga}</p>
                                            </center>
                                        </td>
                                    )
                                } )
                            }
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan</h4>
                {
                    Listmakanan.map((data, index) => {
                    return(
                        <div key={index}>
                            <p  >{data.NamaMakanan} | harga: Rp {data.Harga}</p>
                        </div>
                    )
                    })
                }
               <FormMakanan/>

            </div>

        )
    }
}

export default MenuMakanan