import React from "react";
import tugumuda from "../assets/tugumuda.jpg";

import pertama from "../assets/per1.jpg";
import kedua from "../assets/per2.jpg";
import ketiga from "../assets/per3.jpg";
export default function () {
  return (
    <div className="bg">
      <div className="tugumuda">
        <img src={tugumuda} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div>
        <h1 style={{ color: "black", textAlign: "center" }}>TUGU MUDA</h1>
        <p style={{ color: "black", textAlign: "center", fontFamily: "arial" }}>
          Tugu Muda adalah cagar budaya berbentuk lilin dengan kepala menyerupai
          api menyala. Peristiwa yang melatarbelakangi dibangunnya Tugu Muda
          Semarang adalah Pertempuran Lima Hari di Semarang. Pertempuran Lima
          Hari di Semarang berlangsung selama 15-19 Oktober 1945. Pertempuran
          melawan tentara Jepang ini menelan banyak korban, terutama di wilayah
          Simpang Lima.
        </p>
      </div>
      <div className="line">
        <h1 style={{ color: "white", textAlign: "center" }}>
          SEJARAH PERTEMPURAN 5 HARI
        </h1>
      </div>
      <div className="grid">
        <img src={pertama} alt="" style={{ width: "100%", height: "100%" }} />

        <img src={kedua} alt="" style={{ width: "100%", height: "100%" }} />

        <img src={ketiga} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="sejarah">
        <div className="dalsej">
          <ul typeof="square" style={{ width: "100%", heigh: "100%" }}>
            <li>
              Pertempuran Lima Hari Semarang adalah serangkaian peristiwa
              pertempuran antara rakyat Indonesia melawan tentara Jepang di
              Semarang. Pertempuran Lima Hari Semarang berlangsung sejak 15
              hingga 19 Oktober 1945. Terjadinya pertempuran Lima Hari Semarang
              sendiri disebabkan oleh dua hal, yaitu larinya tentara Jepang dan
              tewasnya dr Kariadi
            </li>
            <li>
              Latar Belakang Pasca-proklamasi kemerdekaan Indonesia tanggal 17
              Agustus 1945, masih ada beberapa prajurit Jepang yang belum
              kembali ke negara asalnya. Beberapa prajurit Jepang yang belum
              bisa kembali pun dipekerjakan di pabrik-pabrik atau sektor lain.
              Bersamaan dengan hal itu, pasukan Sekutu, termasuk Belanda mulai
              kembali datang ke Indonesia. Tujuan kedatangan mereka adalah untuk
              melucuti senjata dan memulangkan para mantan tentara Jepang yang
              masih ada di Indonesia. Tanggal 14 Oktober 1945, para tawanan
              Jepang yang bekerja di Pabrik Gula Cepiring hendak dipindahkan ke
              Bulu. Namun, di tengah jalan, pasukan Jepang melarikan diri dan
              bergabung dengan pasukan Kidobutai yang dipimpin oleh Jenderal
              Nakamura dan Mayor Kido. Kidobutai adalah prajurit yang ditarik
              mundur dari medan pertempuran Asia Pasifik. Mengetahui hal
              tersebut, rakyat Semarang pun berusaha melawan dan meminta Jepang
              untuk menyerahkan senjata mereka. Namun, Mayor Kido menolak untuk
              menyerahkan senjata kepada rakyat Semarang. Setelah kaburnya para
              tawanan Jepang, masih di hari yang sama, para pemuda memutuskan
              untuk melakukan perlawanan lebih lanjut. Mereka berdiskusi di aula
              RS Purusara yang dijadikan sebagai markas perjuangan. Para pemuda
              rumah sakit kemudian mendapat instruksi untuk mencegat dan
              memeriksa mobil Jepang yang melintas di depan RS Purusara. Namun,
              sekitar pukul 18.00, tiba-tiba pasukan Jepang melakukan serangan
              sekaligus melucuti senjata delapan anggota polisi istimewa. Saat
              itu, kedelapan anggota polisi istimewa sedang menjaga sumber air
              minum bagi warga Semarang bernama Reservoir Siranda di Candilama.
              Setelah para anggota polisi istimewa ini ditawan oleh Jepang,
              muncul berita bahwa Jepang telah meracuni Reservoir Siranda.
            </li>
            <li>
              Akhir Pertempuran Pada akhirnya, Pertempuran Lima Hari Semarang
              berhasil diakhiri setelah Kasman Singodimedjo dan Mr Sartono yang
              mewakili Indonesia berunding dengan Komandan Tentara Jepang Letkol
              Nomura. Keduanya berunding untuk mengupayakan gencatan senjata.
              Selain itu, ada juga dari pihak Sekutu yang ikut berunding, yaitu
              Jenderal Bethel. Pihak Sekutu kemudian melucuti seluruh
              persenjataan Jepang tanggal 20 Oktober 1945. Dengan dilucutinya
              senjata Jepang, maka peristiwa Pertempuran Lima Hari Semarang
              resmi berakhir. Peristiwa Pertempuran Lima Hari Semarang dikenang
              dengan pembangunan Tugu Muda di Simpang Lima, Kota Semarang. Tugu
              Muda dibangun tanggal 10 November 1950 dan diresmikan oleh
              Soekarno tanggal 20 Mei 1953.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
