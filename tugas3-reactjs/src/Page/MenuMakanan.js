import React, { Component } from 'react'
import ListMakanan from '../ListData/ListMakanan'

class MenuMakanan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesan: 0
        }
        this.rubahData = this.rubahPesanan.bind(this)
        this.Pesanan = this.Pesanan.bind(this)
    }

    Pesanan = (e) => {
        console.log(e.target.value)
    }

    rubahPesanan = () => {

        this.setState ((state, props) => {
            return { 
                pesan: state.pesan+1
            }
        })
    }

    render() {

        return(
            <div>
                <h3>Daftar Maknan Yang Kami Sediakan :</h3>

               <table>
                   <tbody>
                       <tr>
                           <td>
                                {/* 
                                    urlImage = send data to class component urlImage with props
                                */}

                               <ListMakanan urlImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                               <center>
                                   <button onClick={this.rubahData} >Pesan Sekarang</button>
                               </center>
                           </td>
                           <td>
                               <ListMakanan urlImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                               <center>
                                   <button onClick={this.rubahData} >Pesan Sekarang</button>
                               </center>
                           </td>
                           <td>
                               <ListMakanan urlImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                               <center>
                                   <button onClick={this.rubahData} >Pesan Sekarang</button>
                               </center>
                           </td>
                           <td>
                               
                               <ListMakanan urlImage="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                               <center>
                                   <button onClick={this.rubahData} >Pesan Sekarang</button>
                               </center>
                           </td>
                           <td>
                               <ListMakanan urlImage="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                               <center>
                                   <button onClick={this.rubahData} >Pesan Sekarang</button>
                               </center>
                           </td>                                                 
                       </tr>
                   </tbody>
               </table>

                <br/>
                <input type="text" onChange={this.Pesanan} />
                <h3> Pesanan Anda : {this.state.pesan} </h3>
            </div>
        )

    }
}

export default MenuMakanan;