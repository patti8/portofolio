import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { slide as Menu } from 'react-burger-menu';

class About extends Component {
    render() {
        return (
            <div className="condiv" >
              <Container>
              <h1><b>About</b></h1>
                    <p>
                    Saya Alumni Politeknik Negeri Ambon, Jurusan Teknik Elektro, Program Studi Teknik Informatika, angkatan tahun 2015. Semasa kuliah saya aktif juga dalam beberapa organisasi intra kampus, seperti pada tahun lalu, 2018, dilantik sebagi ketua bidang I Himpunan Mahasiswa Jurusan Teknik Elektro. Pada tahun 2017, saya dan teman-teman se-angkatan Program Studi Teknik Informatika, serta juga dengan beberapa dosen kami membentuk sebuah komunitas, yaitu Maluku Computer Study Club atau MCSC. Harapannya adalah menjadi cikal-bakal perkembangan IT di Maluku.
                    </p>
              </Container>
            </div>
        )
    }
}                                                                                                                                    
export default About