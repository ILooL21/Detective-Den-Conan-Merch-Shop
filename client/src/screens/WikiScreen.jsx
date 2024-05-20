import { Table, Image } from "react-bootstrap";
import { Breadcrumb } from "antd";
import "../styles/WikiScreen.css";

const WikiScreen = () => {
  return (
    <>
      <div className="container-wiki">
        <div className="container-address-header">
        <Breadcrumb
          className="breadcrumb-address"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: "Wiki",
            },
          ]}
          />
        </div>
        <h1>Halaman Wiki Karakter</h1>
        <h3>Protagonists</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          {`Serial ini berkisah tentang Shinichi Kudo dan "versi anak-anaknya", Conan Edogawa, serta kekasih dan sahabatnya Ran Mouri dan ayahnya Kogoro Mouri.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Shinichi Kudo.jpg"
                  thumbnail
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shinichi Kudo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Jimmy Kudo</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Karakter utama serial ini, dan kekasih Dari Mouri Ran. Dia menyusut menjadi seorang anak kecil setelah dipaksa meminum obat bernama APTX 4869, yang dibuat oleh Organisasi Hitam.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Conan Edogawa.jpg"
                  thumbnail
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Conan Edogawa</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Conan Edogawa</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Shinichi Kudo versi "anak-anak". Dia mengincar Organisasi Hitam untuk mendapatkan kembali tubuh aslinya. Serial ini mengikuti perjalanannya dan berbagai kasus yang dia temui di sepanjang jalan.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Ran Mouri.jpg"
                  thumbnail
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ran Mouri</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Rachel Moore</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Teman masa kecil Shinichi, dan kemudian pacarnya. Dia tidak tahu identitas asli Conan. Dialah yang merawatnya bersama ayah detektifnya, Kogoro. Dia juga ahli dalam karate.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Kogoro Mouri.jpg"
                  thumbnail
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kogoro Mouri</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Richard Moore</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{` Detektif Swasta Terkenal yang juga dikenal sebagai "Sleeping Kogoro" (Nemuri No Kogorō),`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Detective Boys</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          {`The Detective Boys adalah sebuah Kelompok di Tokyo, Jepang yang terdiri dari Detektif sekolah dasar yang dengannya Conan Edogawa memecahkan kejahatan yang sesekali dialaminya dan Teman Sekelas Sekolah Dasar Teitan.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Ayumi Yoshida.jpg"
                  fluid
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ayumi Yoshida</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Amy Yeager</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Anggota Detective Boys. Dia menyukai Conan dan dia menganggap Haibara sahabatnya.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Mitsuhiko Tsuburaya.jpg"
                  fluid
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mitsuhiko Tsuburaya</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mitch Tennison</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Anggota Detective Boys. Anak SD paling cerdas di Detective Boys (selain conan yang mengecil). Dia hebat dalam hal sains dan logika.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Genta Kojima.jpg"
                  fluid
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Genta Kojima</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>George Kaminski</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Anggota dan mengaku sebagai pemimpin Detective Boys. Suka makan, apalagi belut bakar di atas nasi.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Ai Haibara.jpg"
                  fluid
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ai Haibara</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                {`Vi Graythorn (movies)`}
                <br />
                {`Anita Hailey (manga)`}
              </td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Anggota Detective Boys dan seorang dewasa yang menyusut oleh APTX 4869. Identitas sebelumnya adalah seorang ilmuwan Organisasi Hitam dengan nama sandi "Sherry", nama asli "Shiho Miyano". Dia adalah pengembang APTX4869.`}
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>Family & Friends</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          {`mereka adalah orang-orang yang memiliki hubungan dekat dan personal dengan para karakter utama dan sering membantu mereka memecahkan sebuah kasus`}
        </p>

        <Table
          bordered
          striped
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Hiroshi Agasa.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Hiroshi Agasa</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Herschel Agasa</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Profesor yang menciptakan gadget untuk digunakan Conan. Adalah sahabat dan tetangga sebelah keluarga kudo (Keluarga Sinichi). Dialah orang pertama yang mengetahui identitas asli Conan.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Sonoko Suzuki.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Sonoko Suzuki</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Serena Sebastian</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Teman baik Ran. Anak temuda dari keluarga kaya Suzuki`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Eri Kisaki.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Eri Kisaki</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Eva Kadan</td>
              <td
                style={{
                  width: "200px",
                  padding: "0 5px",
                  textAlign: "left",
                }}>{`Ibu Ran, seorang pengacara yang sangat sukses. Menikah dengan kogoro mouri, tapi saat ini tinggal terpisah dari Kogoro Mouri. Dia adalah teman Yukiko Kudo.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yusaku Kudo.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yusaku Kudo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Booker Kudo</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Ayah Shinichi. Seorang penulis novel misteri yang terkenal di Amerika dan Jepang.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yukiko Kudo.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yukiko Kudo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Vivian Kudo</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`ibu Shinichi. Seorang pensiunan aktris, dia bisa menyamar dengan baik dan bisa meniru suara tanpa pengubah suara, sebuah keterampilan yang dia pelajari dari Pesulap Toichi Kuroba. Dia adalah teman dekat Sharon Vineyard.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Heiji Hattori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Heiji Hattori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Harley Hartwell</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Detektif saingan Shinichi dan sahabatnya dari Osaka. Dikenal sebagai "Detektif Hebat Barat". Dia juga seorang seniman bela diri Kendo yang terlatih dan orang pertama yang menyimpulkan identitas asli Conan.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kazuha Toyama.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kazuha Toyama</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Kirsten Thomas (anime) <br /> Kazuha Toyama (manga) <br /> Katrina Tolliver (video game) <br /> Katie Thompson (card game)
              </td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Sahabat Heiji Hattori sejak kecil dan kekasihnya. Dia adalah seniman bela diri Aikido yang terlatih.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yoko Okino.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yoko Okino</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yoko Okino</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Selebriti yang di idolakan oleh Kogoro Mouri`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Sumiko Kobayashi.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Sumiko Kobayashi</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Liz Faulkner</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Wali kelas Conan dan pacar Ninzaburo Shiratori. Juga mengaku sebagai manajer Detective Boys.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Tomoaki Araide.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Tomoaki Araide</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Dokter Kogoro, perawat sekolah Teitan, dan pelatih bola basket sekolah menengah. Dia pernah ditiru oleh Vermouth.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Makoto Kyogoku.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Makoto Kyogoku</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Pacar Sonoko Suzuki, dan seorang juara karate yang dikagumi Ran.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Shizuka Hattori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shizuka Hattori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Ibu Heiji Hattori`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Jirokichi Suzuki.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Jirokichi Suzuki</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Paman Sonoko, yang terobsesi untuk mempermalukan dan mengakali Kaitou Kid.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Eisuke Hondou.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Eisuke Hondou</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Teman sekelas Ran dan Sonoko, yang menurut Conan mencurigakan. Dia kemudian diketahui sedang mencari saudara perempuannya Hidemi dan ingin mengikuti jejak ayah dan saudara perempuannya menjadi agen CIA.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Azusa Enomoto.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Azusa Enomoto</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{
                  width: "200px",
                  padding: "0 5px",
                  textAlign: "left",
                }}>{`Seorang pekerja baik hati di kedai kopi yang berada tepat di bawah Kantor Detektif Mouri, yang terkadang memiliki kasus yang dia ingin Kogoro selesaikan.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Subaru Okiya.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Subaru Okiya</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Agen FBI Shuichi Akai yang menyamar menjadi warga sipil setelah dia memalsukan kematiannya untuk melindungi Kir. Dia tinggal di rumah Shinichi Kudo, terkadang membantu Detektif Boys dan Conan dalam kasus, dan mengawasi Haibara.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Masumi Sera.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Masumi Sera</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{
                  width: "200px",
                  padding: "0 5px",
                  textAlign: "left",
                }}>{`Seorang detektif sekolah menengah yang pindah ke kelas sekolah menengah Ran dan Sonoko. Dia adalah adik perempuan dari Shuichi Akai dan Shukichi Haneda.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Shukichi Haneda.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shukichi Haneda</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Pacar Yumi Miyamoto dan pemain shogi profesional. Juga saudara laki-laki Shuichi Akai dan Masumi Sera.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Sakurako Yonehara.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Sakurako Yonehara</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang pengurus rumah tangga dan teman masa kecil Naeko Miike dan Kazunobu Chiba.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Momiji Ooka.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Momiji Ooka</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang siswa SMA Kyoto yang mengklaim bahwa Heiji adalah calon suaminya.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Rumi Wakasa.jpg"
                  style={{ width: "60px", height: "50px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Rumi Wakasa</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Wakil wali kelas baru kelas 1-B SD Teitan. Dia juga entah bagaimana terhubung dengan Kohji Haneda dan kasus 17 tahun lalu.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Muga Iori.jpg"
                  style={{ width: "70px", height: "60px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Muga Iori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Kepala pelayan keluarga Momiji, dan mantan anggota PSB.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Law enforcement</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <h3>Tokyo Metropolitan Police</h3>
        <p>
          {`Tokyo Metropolitan Police adalah lembaga penegak hukum utama yang beroperasi di Tokyo. Mereka bertanggung jawab untuk menangani berbagai kejahatan dan kasus kriminal yang terjadi di kota. Beberapa anggota penting dari kepolisian ini sering muncul dalam cerita dan bekerja sama dengan Conan Edogawa dalam memecahkan berbagai kasus.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Juzo Megure.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Juzo Megure</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Joseph Meguire</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Seorang inspektur dari Distrik Kepolisian Metropolitan Tokyo.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ninzaburo Shiratori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ninzaburo Shiratori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Nicholas Santos</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Inspektur polisi yang bekerja dengan Inspektur Megure. Awalnya saingan Detektif Takagi untuk mendapatkan Hati Detektif Sato, dia tertarik dengan Sumiko Kobayashi.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Miwako Sato.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Miwako Sato</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Detective Simone</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Petugas polisi wanita yang bekerja dengan Inspektur Megure. Saat ini tertarik dengan Detektif Takagi.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Wataru Takagi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Wataru Takagi</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Harry Wilder</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Petugas polisi yang bekerja dengan Inspektur Megure. Saat ini tertarik dengan Detektif Sato.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kazunobu Chiba.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kazunobu Chiba</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Detective Chiba</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Petugas polisi yang sering bekerja dengan Inspektur Megure. Dia adalah teman masa kecil dan kekasih Naeko Miike.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yumi Miyamoto.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yumi Miyamoto</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang petugas lalu lintas dan sahabat Detektif Sato yang suka menggoda. Juga pacar Shukichi Haneda.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Naeko Miike.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Naeko Miike</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang petugas lalu lintas yang bekerja dengan Yumi Miyamoto. Dia adalah teman masa kecil dan kekasih Kazunobu Chiba.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kiyonaga Matsumoto.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kiyonaga Matsumoto</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kristopher McLaughlin</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Inspektur Senior Divisi 1 Polisi Metropolitan Tokyo dan atasan Inspektur Megure.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Inspector Yuminaga.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Inspector Yuminaga</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Kepala inspektur Divisi Kebakaran dan mantan atasan Kogoro Mouri.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Shintaro Chaki.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shintaro Chaki</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Bernie Biggers</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Inspektur Divisi 2 Polisi Metropolitan Tokyo dan atasan Ginzo Nakamori.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Hyoue Kuroda.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Hyoue Kuroda</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Inspektur Divisi 1 Polisi Metropolitan Tokyo dan Mantan Kepala Polisi Nagano. Dia memiliki mata rusak yang ditutupi oleh lensa yang teduh. Dia tahu kalau Conan adalah "Otak dibalik Kogoro Tidur".`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Jinpei Matsuda.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Jinpei Matsuda</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang anggota skuadron bom MPD Tokyo yang tewas saat bertugas tiga tahun lalu. Dia adalah cinta pertama Sato.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kenji Hagiwara.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kenji Hagiwara</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Seorang anggota skuadron bom MPD Tokyo yang tewas saat bertugas tujuh tahun lalu. Dia adalah sahabat Matsuda.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Wataru Date.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Wataru Date</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Seorang petugas polisi yang sudah meninggal, merupakan mentor Takagi dan teman Amuro.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Osaka Police District</h3>
        <p>
          {`Osaka Police District adalah lembaga penegak hukum yang beroperasi di wilayah Osaka. Mereka berperan penting dalam menangani kejahatan dan kasus kriminal di area tersebut. Beberapa anggota utama dari kepolisian Osaka sering muncul dalam cerita dan bekerja sama dengan Conan Edogawa serta Hattori Heiji.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Heizo Hattori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Heizo Hattori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Martin Hartwell</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Ayah Heiji Hattori, dan seorang kepala polisi dari Kepolisian Distrik Osaka.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ginshiro Toyama.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ginshiro Toyama</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Chief Thomas</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Ayah Kazuha, dan seorang detektif dari Kepolisian Distrik Osaka.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Goro Otaki.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Goro Otaki</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Inspector Odin</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Inspektur dari Kepolisian Distrik Osaka, dan teman dekat Heiji dan Heizo.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Nagano Police District</h3>
        <p>
          {`Nagano Police District adalah lembaga penegak hukum yang beroperasi di wilayah Nagano. Mereka berperan dalam menangani berbagai kejahatan yang terjadi di daerah pegunungan ini.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kansuke Yamato.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kansuke Yamato</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Inspektur dari Kepolisian Distrik Nagano, cacat sebagian setelah selamat dari longsoran salju.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yui Uehara.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yui Uehara</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Mantan rekan Kansuke Yamato yang baru saja kembali bertugas.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Taka'aki Morofushi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                {`Taka'aki Morofushi`}
                <br />
                (Komei)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Inspektur dari Kepolisian Distrik Nagano. Teman masa kecil dan saingan Kansuke Yamato. Dia juga merupakan kakak dari Hiromitsu Morofushi.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Other police districts</h3>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Sango Yokomizo.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Sango Yokomizo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Inspector Worthington</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> Inspektur dari Kepolisian Distrik Shizuoka, terkenal dengan kepribadiannya yang kasar.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/	Misao Yamamura.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Misao Yamamura</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Inspector Magnum</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Detektif dari Kepolisian Distrik Gunma, meski tidak terlalu baik namun kemudian dipromosikan menjadi "Inspektur".`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Jugo Yokomizo.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Jugo Yokomizo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Saudara kembar Sango Yokomizo, juga seorang inspektur dari Kepolisian Daerah Kanagawa. Dia tidak semudah saudaranya.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Chihaya Hagiwara.jpg"
                  style={{ width: "60px", height: "50px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}> Chihaya Hagiwara</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Asisten Inspektur dari departemen kepolisian Prefektur Kanagawa dan kakak perempuan Kenji Hagiwara.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Fumimaro Ayanokoji.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Fumimaro Ayanokoji</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Inspektur dari Kepolisian Prefektur Kyoto, juga dikenal sebagai "Inspektur Kerajaan" karena garis keluarga bangsawannya. Terkenal karena keangkuhannya dan keterikatannya pada tupai peliharaannya.`}
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>Japanese intelligence agencies</h3>
        <p>
          {`intelijen Jepang muncul untuk menangani kasus-kasus yang melibatkan kejahatan tingkat tinggi dan ancaman nasional, terutama yang berhubungan dengan organisasi kriminal seperti Organisasi Hitam.`}
        </p>
        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Rei Furuya.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Rei Furuya
                <br />
                (Bourbon)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Nama Asli Tooru Amuro. Mengkhususkan diri dalam pekerjaan detektif dan pengumpulan informasi. Dia menyamar sebagai detektif swasta dan menjadi murid Kogoro Mouri. Dia kemudian terungkap sebagai penyelidik Badan Kepolisian Nasional yang menyamar
                bekerja untuk melemahkan Organisasi.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Hiromitsu Morofushi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Hiromitsu Morofushi
                <br />
                (Scotch)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Seorang penyelidik yang menyamar dari Biro Keamanan Umum Departemen Kepolisian Metropolitan Tokyo. Dia meninggal saat menyusup ke Organisasi Hitam dan merupakan adik dari Taka'aki Morofushi.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Yuya Kazami.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Yuya Kazami</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang penyelidik dari Biro Keamanan Umum Departemen Kepolisian Metropolitan Tokyo dan Bawahan Rei.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>FBI</h3>
        <p>
          {`FBI merupakan Melindungi Amerika Serikat dari operasi intelijen asing, spionase, dan operasi dunia maya. memainkan peran penting dalam memerangi kejahatan internasional, khususnya melawan Organisasi Hitam, sebuah kelompok kriminal besar yang menjadi ancaman global.`}
        </p>
        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Shuichi Akai.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shuichi Akai</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Agen FBI, yang dianggap oleh Gin sebagai saingannya, dan "Peluru Perak" yang bisa menjatuhkan Organisasi Hitam. Di masa lalu, dia menyusup ke Organisasi Hitam dengan nama Dai Moroboshi dan mendapatkan nama sandi "Rye"
                sebelum diusir. Dia memalsukan kematiannya untuk melindungi Kir dan saat ini menyamar sebagai Subaru Okiya.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Jodie Starling.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Jodie Starling
                <br />
                (Jodie Saintemillion)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Seorang agen FBI yang sedang melakukan tugas rahasia melawan Organisasi Hitam, dan pernah menjadi guru bahasa Inggris Ran.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/James Black.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>James Black</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Agen FBI berpangkat tinggi, atasan Jodie.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Andre Camel.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Andre Camel</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{` Agen FBI, memainkan peran penting dalam perlindungan Rena Mizunashi. `}</td>
            </tr>
          </tbody>
        </Table>

        <h3>CIA</h3>
        <p>
          {`CIA merupakan badan intelegensi amerika, memainkan peran dalam memerangi kejahatan internasional, terutama yang berkaitan dengan Organisasi Hitam. Agen-agen CIA bekerja dalam bayang-bayang, sering kali menyusup ke dalam organisasi kriminal dan menggunakan berbagai metode intelijen untuk mengumpulkan informasi dan mengungkap aktivitas ilegal.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Hidemi Hondou.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Hidemi Hondou
                <br />
                (Kir)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Seorang agen CIA yang menyamar, juga berpura-pura menjadi reporter TV Rena Mizunashi.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ethan Hondou.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ethan Hondou</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}> {`Almarhum anggota CIA yang menyusup ke Organisasi Hitam. Dia juga ayah Hidemi dan Eisuke.`}</td>
            </tr>
          </tbody>
        </Table>

        <h3>MI6</h3>
        <p>
          {`MI6 (juga dikenal sebagai Secret Intelligence Service atau SIS) adalah badan intelijen utama Inggris yang menangani operasi rahasia dan pengumpulan intelijen di luar negeri. `}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Mary Sera.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mary Sera</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Seorang anak usia sekolah menengah tak dikenal yang tampak seperti seorang gadis dengan rambut terang. Dia sebenarnya adalah seorang wanita paruh baya yang menyusut karena APTX-4869, dan merupakan ibu dari Shuichi Akai,
                Shukichi Haneda, dan Masumi Sera.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Tsutomu Akai.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Tsutomu Akai</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Suami Mary dan ayah dari Shuichi Akai, Shukichi Haneda, dan Masumi Sera. Dia hilang 17 tahun lalu setelah pembunuhan Kohji Haneda dan tubuhnya tidak pernah ditemukan.`}
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>Black Organization</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          {`"The Black Organization" berperan sebagai antagonis utama dalam serial ini. Ini adalah sindikat kriminal rahasia dengan tujuan tersembunyi. Untuk mencapai tujuan tersebut, mereka melakukan berbagai kejahatan untuk menjaga kerahasiaannya, menghilangkan hambatan, dan mengumpulkan dana dan sumber daya untuk proyek penelitian misteriusnya. Para anggota organisasi diberi kode nama berdasarkan minuman beralkohol. Pemimpinnya adalah Renya Karasuma dan anggota pertama yang muncul adalah Gin dan Vodka, yang bertanggung jawab untuk mengubah Shinichi Kudo menjadi seorang anak dengan obat misterius APTX 4869. Mereka adalah musuh bebuyutan Conan Edogawa.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Renya Karasuma.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Renya Karasuma</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>The Boss</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Bos Organisasi Hitam, yang dengan hormat dipanggil "orang itu" oleh bawahannya, dan antagonis utama sebenarnya dari serial ini. Dia adalah seorang miliarder dan orang paling berkuasa di Jepang.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Rum.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Rum</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Orang kedua di Organisasi Hitam dan pembantu dekat Karasuma. Dia terlibat dalam pembunuhan Amanda Hughes dan Kohji Haneda di Amerika tujuh belas tahun lalu. Saat ini, dia menyamar sebagai Kanenori Wakita dan bekerja di Beika
                Iroha Sushi sebagai koki sushi untuk memata-matai Kogoro.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Gin.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Gin</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Gin Melkior</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Seorang anggota eksekutif tingkat tinggi Organisasi Hitam. Seorang pembunuh yang sangat cerdas dan mematikan, dia mencoba membunuh Shinichi dengan APTX 4869.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Vodka.jpg"
                  style={{ width: "50px", height: "55px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Vodka</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Vodka Kaspar</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Anggota Organisasi Hitam. Sekretaris Gin dan rekannya di banyak kesempatan.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Chris Vineyard.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Chris Vineyard
                <br />
                (Vermouth)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Anggota Organisasi Hitam. Dia adalah seorang aktris dan ahli penyamaran. Dianggap sebagai "favorit" Bos, dan mengetahui bahwa Haibara dan Conan adalah Sherry dan Shinichi. Dia dikenal dunia sebagai Sharon Vineyard.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Chianti.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Chianti</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Anggota Organisasi Hitam. Dianggap sebagai penembak jitu yang hebat.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Korn.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Korn</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Anggota Organisasi Hitam. Dianggap sebagai penembak jitu yang hebat.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Shiho Miyano.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Shiho Miyano
                <br />
                (Sherry)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Shiho Miyano</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Dengan nama sandi Sherry, dia adalah seorang ilmuwan untuk Organisasi Hitam dan pencipta APTX 4869. Kematian saudara perempuannya menyebabkan dia mengkhianati Organisasi Hitam.saat ini dia hidup sebagai Ai Haibara.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Akemi Miyano.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Akemi Miyano</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Akemi Miyano</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Mantan anggota Organisasi Hitam, saudara perempuan Shiho Miyano, putri Elena Miyano dan Atsushi Miyano, dan pacar Shuichi Akai. Dia dibunuh oleh Gin karena menjadi tanggung jawab organisasi.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Elena Miyano.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Elena Miyano</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Ibu Akemi dan Shiho Miyano. Almarhum anggota Organisasi Hitam yang dikenal sebagai "Hell's Angel".`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Atsushi Miyano.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Atsushi Miyano</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Ayah Akemi Miyano dan Shiho Miyano. Almarhum anggota Organisasi Hitam yang dikenal sebagai "Mad Scientist".`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Tequila.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Tequila</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Tequila</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Anggota Organisasi Hitam, awalnya mencoba mendapatkan program dan daftar programmer top dunia. Tidak sengaja terbunuh oleh bom.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kenzo Masuyama.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>
                Kenzo Masuyama
                <br />
                (Pisco)
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Seorang anggota eksekutif Organisasi Hitam dan teman keluarga Miyano. Tugas terakhirnya adalah membunuh seorang politisi. Dia dibunuh oleh Gin karena ketahuan.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Calvados.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Calvados</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Anggota Organisasi Hitam, penembak jitu lainnya. Membunuh dirinya sendiri setelah Shuichi Akai melempuhkannyanya. Dia jatuh cinta dengan Vermouth.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Rikumichi Kusuda.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Rikumichi Kusuda</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Anggota Organisasi Hitam, yang berpura-pura menjadi pasien di rumah sakit yang menampung Kir. Dia bunuh diri ketika penyamarannya terbongkar. Mayatnya digunakan untuk memalsukan kematian Shuichi Akai.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ki'ichiro Numabuchi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>{`Ki'ichiro Numabuchi`}</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Cornelius Graver</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Pembunuh berantai yang ditemui Conan beberapa kali. Mantan anggota Organisasi Hitam, yang dijadwalkan menjadi subjek tes asli APTX 4869 sebelum melarikan diri.
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>Others</h3>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Kohji Haneda.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kohji Haneda</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kohji Haneda</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Saudara laki-laki Sesumpah Shukichi dan pemain shogi profesional. Dia terpaksa meminum APTX 4869, dan akibatnya meninggal 17 tahun yang lalu.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Amanda Hughes.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Amanda Hughes</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Seorang pengusaha wanita kaya Amerika terbunuh dalam kasus 17 tahun lalu. Dia kemungkinan besar menjadi sasaran Organisasi Hitam karena hubungannya dengan FBI.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Mysterious Old Man with Bird.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mysterious Old Man with Bird</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Karakter misterius ditampilkan di sebuah ruangan besar yang mewah dengan seekor elang.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Mysterious Old Man.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mysterious Old Man</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Karakter misterius yang ditampilkan dalam mobil mewah mengenakan nafas.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image
                  src="./src/assets/images/WikiImage/Mysterious man with sunglasses.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mysterious man with sunglasses</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Karakter misterius yang ditampilkan sebagai pengemudi Pak Tua misterius.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/The Criminal.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>{`"The Criminal"`}</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>{`"The Criminal"`}</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Penggambaran umum yang menggantikan pelaku yang tidak diketahui.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Scar Akai.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Scar Akai</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Penyamaran Shuichi Akai digunakan oleh Bourbon dan Vermouth untuk mengetahui apakah Akai yang asli sudah mati dan untuk memancing Sherry.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ryusuke Higo.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ryusuke Higo</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Seorang pemain sepak bola terkenal yang sebelumnya bermain untuk Noir Tokyo, sebelum direkrut ke Big Osaka. Haibara adalah penggemar beratnya.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Hideo Akagi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Hideo Akagi</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Harrison Acres</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Pemain sepak bola jagoan untuk Tokyo Spirits. Berkenalan dengan Conan setelah dia membantu menyelesaikan penculikan adik laki-lakinya.</td>
            </tr>
          </tbody>
        </Table>

        <h3>Magic Kaito</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          {`Magic Kaito adalah serial manga shōnen Jepang tahun 1987 yang ditulis dan diilustrasikan oleh Gosho Aoyama. Bercerita tentang Kaito Kuroba yang mengetahui apa yang dilakukan ayahnya sebelum dia meninggal. Dia mengambil nama samaran ayahnya dan menjadi Phantom Thief Kid yang baru. Pemeran utama serial ini juga muncul dalam serial Detektif Conan sebagai kolaborasi sempurna antara detektif hebat dan pencuri hantu hebat, yang dapat disamakan dengan Sherlock Holmes vs. Arsene Lupin.`}
        </p>

        <Table
          striped
          bordered
          hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "60px" }}>Picture</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "30px" }}>English Name</th>
              <th style={{ backgroundColor: "#db4444", color: "#fff", width: "200px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kaito Kuroba.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kaito Kuroba</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kaito Kuroba</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Siswa sekolah menengah dan pesulap. Teman masa kecil Aoko Nakamori, dan kekasihnya. Putra pesulap terkenal dunia Toichi Kuroba.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kaitou Kid.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kaitou Kid</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Phantom Thief Kid</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Identitas rahasia Kaito Kuroba. Pesulap dan pencuri, juga dikenal "tidak bisa ditangkap".`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Aoko Nakamori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Aoko Nakamori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Teman masa kecil Kaito Kuroba, dan kekasihnya. Putri Ginzo Nakamori.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Ginzo Nakamori.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Ginzo Nakamori</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Mace Fuller</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Inspektur dari Divisi 2 Polisi Metropolitan Tokyo, yang terobsesi menangkap Kaitou Kid.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Toichi Kuroba.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Toichi Kuroba</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Toichi Kuroba</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                {`Ayah Kaito Kuroba yang sudah meninggal. Pernah menjadi pesulap terkenal di dunia dan Kaitou Kid yang asli. Dialah yang mengajari Yukiko Kudo dan Sharon Vineyard cara membuat penyamaran yang sempurna.`}
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Chikage Kuroba.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Chikage Kuroba</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Ibu Kaito Kuroba. Sebelum bertemu suaminya, dia adalah seorang pencuri permata yang dikenal sebagai Phantom Lady.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Konosuke Jii.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Konosuke Jii</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>{`Dulunya pelayan dan teman Toichi Kuroba, sekarang asisten Kaito.`}</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Kaitou Corbeau.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Kaitou Corbeau</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Pencuri misterius yang terlihat seperti Kaitou Kid dengan pakaian hitam. Dia baru-baru ini muncul di Las Vegas sebelum datang ke Jepang untuk mengincar Midnight Crow.
              </td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Akako Koizumi.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Akako Koizumi</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Seorang penyihir yang ingin merayu Kaitou Kid dan memperbudak semua pria.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Saguru Hakuba.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Saguru Hakuba</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Detektif SMA mencoba menangkap Kaitou Kid.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Snake.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Snake</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>Antagonis utama, anggota Organisasi Kaito Sihir yang bertanggung jawab atas pembunuhan Toichi Kuroba.</td>
            </tr>
            <tr>
              <td style={{ width: "60px" }}>
                <Image src="./src/assets/images/WikiImage/Spider.jpg" />
              </td>
              <td style={{ width: "30px", lineHeight: "15px" }}>Spider</td>
              <td style={{ width: "30px", lineHeight: "15px" }}>N/A</td>
              <td style={{ width: "200px", padding: "0 5px", textAlign: "left" }}>
                Karakter khusus anime yang bekerja untuk Organisasi Kaito Ajaib sebagai seorang pembunuh. Tokoh publiknya adalah pemain panggung dan ilusionis bernama Gunter Von Goldberg II.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default WikiScreen;