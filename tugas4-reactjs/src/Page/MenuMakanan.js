import React, { Component } from 'react'
import ListMakanan from '../ListData/ListMakanan'

class MenuMakanan extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            pesan:"",
            tampil:false,
            jumlah:0,

        }
        this.pilihPesanan = this.pilihPesanan.bind(this)
        this.btnNasiPadang = this.btnNasiPadang.bind(this)
        this.btnSate = this.btnSate.bind(this)
        this.btnSotoAyam = this.btnSotoAyam.bind(this)
        this.btnUduk = this.btnUduk.bind(this)
        this.btnKuning = this.btnKuning.bind(this)
        this.btnBatal = this.btnBatal.bind(this)
    }

    pilihPesanan(value, e) {
        // this.setState((state,props,value, target) => {
            
        //     console.log(value)
            
        //     return {
        //         [value]:e.target.value,
        //         tampil:true
        //     }
        // })

        this.setState( { [value] : e.target.value })
    }

    btnNasiPadang() {
        this.setState( (state, props) => {
            return{
                pesan:"Nasi Padang",
                jumlah: this.state.jumlah+1,
                tampil:true,
            }
        })
    }
    btnSate() {
        this.setState((state,props) => {
            return {
                pesan:"Sate",
                jumlah: this.state.jumlah+1,
                tampil:true,
            }
        })
    }
    btnSotoAyam() {
        this.setState((state, props)=> {
            return {
                pesan: "Soto Ayam",
                jumlah:this.state.jumlah+1,
                tampil:true,
            }
        })
    }
    btnUduk() {
        this.setState((state, props) => {
            return {
                pesan:"Nasi Uduk",
                jumlah:this.state.jumlah+1,
                tampil:true,
            }
        })
    }
    btnKuning() {
        this.setState((state,props) => {
            return {
                pesan: "Nasi Kuning",
                jumlah: this.state.jumlah+1,
                tampil:true,
            }
        })
    }
    btnBatal() {
        this.setState((state,props) => {
            return {
                pesan: "",
                jumlah: 0,
                tampil: false,
            }
        })
    }

    render() {
        return(
            <div>
                <h3>Daftar Maknan yang Kami Sediakan: </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan urlImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.btnNasiPadang} >Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan urlimage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.btnSate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan urlImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.btnSotoAyam} >Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan urlImage="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button onClick={this.btnUduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan urlImage="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                                <center>
                                    <button onClick={this.btnKuning} >Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Nama Makanan" onChange={ (e) => this.pilihPesanan("pesan",e) } value={this.state.pesan}  />
                            </td>
                            <td>
                                <input type="number" onChange={ (e) => this.pilihPesanan("jumlah",e) } placeholder="Total Pesanan" />
                            </td>
                            <td>
                                <button onClick={this.btnBatal}>Batalkan Semua Pesanan </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

                {
                            this.state.tampil === true ?  (
                            <div>
                                <h4>Pesanan Anda :  </h4>
                                <p>{this.state.pesan}</p>

                                <h4>Total Pesanan Anda :  </h4>

                                <p>{this.state.jumlah}</p>
                            </div>
                            ) : (
                                <div>
                                    <h1>Anda Belum memesan</h1>
                                </div>
                            )
                        }
            </div>
        )
    }
}


export default MenuMakanan