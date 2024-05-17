import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WikiScreen.css";

const WikiScreen = () => {
  return (
    <>
      <div className="centered-text">
        <h1>Here Wiki Page</h1>
        <p></p>

        <h3>Protagonists</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shinichi Kudo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shinichi Kudo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Jimmy Kudo</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Main character of the series, and Ran's love interest and later
                boyfriend. He was shrunk into a child after being forced to take
                a drug called APTX 4869, which was created by the Black
                Organization.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Conan Edogawa.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Conan Edogawa
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Conan Edogawa
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                "Child" version of Shinichi Kudo. He's after the Black
                Organization to regain his original body. The show follows his
                journey and the different cases he encounters along the way.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ran Mouri.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Ran Mouri</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Rachel Moore
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Shinichi's childhood friend, and later his girlfriend. She
                doesn't know Conan's real identity. She's the one taking care of
                him along with her detective father, Kogoro. She is also skilled
                in karate.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kogoro Mouri.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kogoro Mouri
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Richard Moore
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Private eye and Ran's father. Separated from Eri Kisaki, Ran's
                mother.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Detective Boys</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ayumi Yoshida.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ayumi Yoshida
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Amy Yeager</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Detective Boys. She likes Conan and she considers
                Haibara her best friend.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Mitsuhiko Tsuburaya.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mitsuhiko Tsuburaya
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mitch Tennison
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Member of the Detective Boys. The most intelligent true child in
                the Detective Boys. He is great when it comes to science and
                logic.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Genta Kojima.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Genta Kojima
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                George Kaminski
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member and self-proclaimed leader of the Detective Boys. Loves
                to eat, especially roasted eel on rice.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ai Haibara.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Ai Haibara</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Vi Graythorn (movies)
                <br />
                Anita Hailey (manga)
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Detective Boys and an adult shrunken by APTX 4869.
                Her former identity was a Black Organization scientist codenamed
                "Sherry", real name "Shiho Miyano". She is a developer of
                APTX4869.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Family & Friends</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Hiroshi Agasa.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Hiroshi Agasa
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Herschel Agasa
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Professor who creates gadgets for Conan to use. Is the best
                friend and the next-door neighbour of the Kudos. He was the
                first to know about Conan's true identity.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Sonoko Suzuki.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Sonoko Suzuki
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Serena Sebastian
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Ran's best friend. The youngest daughter of the wealthy Suzuki
                family.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Eri Kisaki.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Eri Kisaki</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Eva Kadan</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Ran's mother, a very successful attorney. Married to, but
                currently living separately from Kogoro Mouri. She is a friend
                of Yukiko Kudo.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yusaku Kudo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Yusaku Kudo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Booker Kudo
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Shinichi's father. A famous mystery novel author who is
                well-known in both America and Japan.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yukiko Kudo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Yukiko Kudo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Vivian Kudo
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Shinichi's mother. A retired actress, she can disguise well and
                can mimic voices without a voice changer, a skill she learned
                from the deceased magician Toichi Kuroba. She is a close friend
                of Sharon Vineyard.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Heiji Hattori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Heiji Hattori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Harley Hartwell
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Shinichi's rival detective and best friend from Osaka. Known as
                "Great Detective of the West". He's also a trained Kendo martial
                artist and the first to deduce Conan's true identity.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kazuha Toyama.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kazuha Toyama
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kirsten Thomas (anime) <br /> Kazuha Toyama (manga) <br />{" "}
                Katrina Tolliver (video game) <br /> Katie Thompson (card game)
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Heiji Hattori's best friend since childhood and love interest.
                She is a trained Aikido martial artist.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yoko Okino.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Yoko Okino</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Yoko Okino</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Star who is idolized by Kogoro Mouri.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Sumiko Kobayashi.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Sumiko Kobayashi
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Liz Faulkner
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Conan's homeroom teacher and Ninzaburo Shiratori's girlfriend.
                Also the self-proclaimed manager of the Detective Boys.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Tomoaki Araide.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Tomoaki Araide
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Kogoro's doctor, Teitan school nurse, and a high school
                basketball coach. He was once impersonated by Vermouth.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Makoto Kyogoku.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Makoto Kyogoku
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Sonoko Suzuki's boyfriend, and a karate champion that has been
                admired by Ran.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shizuka Hattori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shizuka Hattori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Heiji Hattori's mother.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Jirokichi Suzuki.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Jirokichi Suzuki
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Sonoko's uncle, who is obsessed with embarrassing and
                outsmarting Kaitou Kid.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Eisuke Hondou.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Eisuke Hondou
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Ran and Sonoko's classmate, whom Conan finds suspicious. He is
                later discovered to be looking for his sister Hidemi and wants
                to follow in the footsteps of his father and sister to be a CIA
                agent.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Azusa Enomoto.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Azusa Enomoto
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A kind worker at the coffee shop that is right under the Mouri
                Detective Agency, who sometimes has a case that she wants Kogoro
                to solve.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Subaru Okiya.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Subaru Okiya
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                FBI agent Shuichi Akai's civilian persona after he faked his
                death to protect Kir. He lives in Shinichi Kudo's house,
                sometimes assists the Detective Boys and Conan on cases, and
                keeps an eye on Haibara.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Masumi Sera.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Masumi Sera
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A high school detective who transfers into Ran and Sonoko's high
                school class. She is the younger sister of Shuichi Akai and
                Shukichi Haneda.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shukichi Haneda.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shukichi Haneda
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Yumi Miyamoto's boyfriend and a professional shogi player. Also
                the brother of Shuichi Akai and Masumi Sera.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Sakurako Yonehara.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Sakurako Yonehara
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A housekeeper and Naeko Miike and Kazunobu Chiba's childhood
                friend.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Momiji Ooka.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Momiji Ooka
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A Kyoto high school student who claims that Heiji is her future
                husband.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Rumi Wakasa.jpg"
                  style={{ width: "60px", height: "50px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Rumi Wakasa
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                The new deputy homeroom teacher of class 1-B of Teitan Primary
                school. She is also somehow connected to Kohji Haneda and the
                case from 17 years ago.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Muga Iori.jpg"
                  style={{ width: "70px", height: "60px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Muga Iori</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                The butler of Momiji's family, and a former member of the PSB.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>
          Law enforcement <br /> Tokyo Metropolitan Police District
        </h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Juzo Megure.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Juzo Megure
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Joseph Meguire
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An inspector from the Tokyo Metropolitan Police District.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ninzaburo Shiratori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ninzaburo Shiratori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Nicholas Santos
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Police inspector who works with Inspector Megure. Originally
                Detective Takagi's rival for Detective Sato's affection, he is
                involved with Sumiko Kobayashi.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Miwako Sato.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Miwako Sato
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Detective Simone
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Female police officer who works with Inspector Megure. Currently
                involved with Detective Takagi.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Wataru Takagi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Wataru Takagi
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Harry Wilder
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Police officer who works with Inspector Megure. Currently
                involved with Detective Sato.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kazunobu Chiba.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kazunobu Chiba
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Detective Chiba
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Police officer who often works with Inspector Megure. He is
                Naeko Miike's childhood friend and love interest.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yumi Miyamoto.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Yumi Miyamoto
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A traffic enforcer and Detective Sato's best friend who is a
                compulsive tease. Also Shukichi Haneda's girlfriend.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Naeko Miike.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Naeko Miike
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A traffic enforcer working with Yumi Miyamoto. She is Kazunobu
                Chiba's childhood friend and love interest.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kiyonaga Matsumoto.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kiyonaga Matsumoto
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kristopher McLaughlin
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Senior Superintendent of the Tokyo Metropolitan Police 1st
                Division and Inspector Megure's superior.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Inspector Yuminaga.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Inspector Yuminaga
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                The head inspector of the arson squad and Kogoro Mouri's former
                superior.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shintaro Chaki.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shintaro Chaki
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Bernie Biggers
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Superintendent of the Tokyo Metropolitan Police 2nd Division and
                Ginzo Nakamori's superior.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Hyoue Kuroda.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Hyoue Kuroda
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Superintendent of the Tokyo Metropolitan Police 1st Division and
                Former Nagano Police Chief. He has a damaged eye covered by a
                shaded lens. He knows that Conan is the "Brains behind Sleeping
                Kogoro".
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Jinpei Matsuda.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Jinpei Matsuda
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A member of the Tokyo MPD bomb squadron who died on duty three
                years ago. He is Sato's first love.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kenji Hagiwara.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kenji Hagiwara
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                A member of the Tokyo MPD bomb squadron who died on duty seven
                years ago. He was Matsuda's best friend.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Wataru Date.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Wataru Date
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                A deceased police officer who was Takagi's mentor and Amuro's
                friend.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Osaka Police District</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Heizo Hattori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Heizo Hattori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Martin Hartwell
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Heiji Hattori's father, and a police chief from Osaka Police
                District.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ginshiro Toyama.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ginshiro Toyama
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Chief Thomas
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Kazuha's father, and a detective from Osaka Police District.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Goro Otaki.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Goro Otaki</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Inspector Odin
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Inspector from Osaka Police District, and a very close friend to
                Heiji and Heizo.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Nagano Police District</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kansuke Yamato.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kansuke Yamato
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Inspector from Nagano Police District, partially disabled after
                surviving an avalanche.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yui Uehara.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Yui Uehara</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Kansuke Yamato's former partner who has recently returned to the
                force.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Taka'aki Morofushi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Taka'aki Morofushi
                <br />
                (Komei)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Inspector from Nagano Police District. Childhood friend and
                rival of Kansuke Yamato. He is also the older brother of
                Hiromitsu Morofushi.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Other police districts</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Sango Yokomizo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Sango Yokomizo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Inspector Worthington
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Inspector from Shizuoka Police District, known for his gruff
                personality.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/	Misao Yamamura.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Misao Yamamura
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Inspector Magnum
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Detective from Gunma Police District, albeit a not very good
                one. Is later promoted to "Inspector".
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Jugo Yokomizo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Jugo Yokomizo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Sango Yokomizo's twin brother, also an inspector from Kanagawa
                Police District. He is not as easygoing as his brother.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Chihaya Hagiwara.jpg"
                  style={{ width: "60px", height: "50px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                {" "}
                Chihaya Hagiwara
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Assistant Inspector from the police department of Kanagawa
                Prefecture and the older sister of Kenji Hagiwara.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Fumimaro Ayanokoji.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Fumimaro Ayanokoji
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Inspector from Kyoto Prefectural Police, also known as the
                "Royal Inspector" for his noble family line. Notorious for his
                snobbishness and his attachment to his pet chipmunk.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Japanese intelligence agencies</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Rei Furuya.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Rei Furuya
                <br />
                (Bourbon)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Aka Tooru Amuro. Specializes in detective work and information
                gathering. He posed as a private detective and became Kogoro
                Mouri's apprentice. He is later revealed as an undercover
                National Police Agency investigator working to undermine the
                Organization.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Hiromitsu Morofushi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Hiromitsu Morofushi
                <br />
                (Scotch)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A deceased undercover investigator from the Tokyo Metropolitan
                Police Department's Public Security Bureau. He died while
                infiltrating the Black Organization and the younger brother of
                Taka'aki Morofushi.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Yuya Kazami.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Yuya Kazami
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An investigator from the Tokyo Metropolitan Police Department's
                Public Security Bureau and Rei's Subordinate.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>FBI</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shuichi Akai.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shuichi Akai
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                FBI agent, considered by Gin as his rival, and the "Silver
                Bullet" that could take down the Black Organization. In the
                past, he infiltrated the Black Organization under the name Dai
                Moroboshi and obtained the codename "Rye" before being expelled.
                He faked his death to protect Kir and is currently undercover as
                Subaru Okiya.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Jodie Starling.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Jodie Starling
                <br />
                (Jodie Saintemillion)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An FBI agent on an undercover assignment against the Black
                Organization, and Ran's English teacher at one point.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/James Black.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                James Black
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                High ranking FBI agent, Jodie's superior.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Andre Camel.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Andre Camel
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                FBI agent, played a vital role in the protection of Rena
                Mizunashi.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>CIA</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Hidemi Hondou.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Hidemi Hondou
                <br />
                (Kir)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An undercover CIA agent, also pretending to be TV reporter Rena
                Mizunashi.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ethan Hondou.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ethan Hondou
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Deceased CIA member who infiltrated the Black Organization. He
                is also Hidemi and Eisuke's father.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>MI6</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Mary Sera.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Mary Sera</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An unknown child of middle school age who appears to be a girl
                with light hair. She is in fact a middle-aged woman that shrunk
                due to the APTX-4869, and is the mother of Shuichi Akai,
                Shukichi Haneda, and Masumi Sera.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Tsutomu Akai.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Tsutomu Akai
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Mary's husband and the father of Shuichi Akai, Shukichi Haneda,
                and Masumi Sera. He went missing 17 years ago after the murder
                of Kohji Haneda and his body was never found.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Black Organization</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Renya Karasuma.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Renya Karasuma
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>The Boss</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                The boss of the Black Organization, who is respectfully called
                "Ano kata" by his subordinates, and the true central antagonist
                of the series. He is a multi-millionaire and the most powerful
                person in Japan.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Rum.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Rum</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Second-in-command of the Black Organization and close aide of
                Karasuma. He was involved in the murder of Amanda Hughes and
                Kohji Haneda in the United States seventeen years ago.
                Currently, he disguises as Kanenori Wakita and works at Beika
                Iroha Sushi as a sushi chef to spy on Kogoro.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Gin.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Gin</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Gin Melkior
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A high ranking executive member of the Black Organization. A
                highly intelligent and lethal assassin, he tried to kill
                Shinichi with APTX 4869.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Vodka.jpg"
                  style={{ width: "50px", height: "55px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Vodka</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Vodka Kaspar
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization. Gin's secretary and partner on
                most occasions.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Chris Vineyard.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Chris Vineyard
                <br />
                (Vermouth)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization. She is an actress and master
                of disguise. Considered the Boss' "favorite," and knows that
                Haibara and Conan are Sherry and Shinichi. She was known to the
                world as Sharon Vineyard.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Chianti.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Chianti</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization. Considered an excellent
                sniper.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Korn.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Korn</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization. Considered an excellent
                sniper.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Shiho Miyano.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shiho Miyano
                <br />
                (Sherry)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Shiho Miyano
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                {" "}
                Codenamed Sherry, she was a scientist for the Black Organization
                and creator of APTX 4869. Her sister's death caused her to
                betray the Black Organization. Her current alias is Ai Haibara.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Akemi Miyano.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Akemi Miyano
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Akemi Miyano
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Former member of the Black Organization, sister of Shiho Miyano,
                daughter of Elena Miyano and Atsushi Miyano, and the girlfriend
                of Shuichi Akai. She was killed by Gin for being a liability to
                the organization.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Elena Miyano.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Elena Miyano
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Akemi and Shiho Miyano's mother. Deceased member of the Black
                Organization known as Hell's Angel.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Atsushi Miyano.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Atsushi Miyano
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Akemi Miyano and Shiho Miyano's father. Deceased member of the
                Black Organization known as the "Mad Scientist".
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Tequila.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Tequila</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Tequila</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization, originally trying to get
                programs and a list of the world's top programmers. Was
                accidentally killed by a bomb.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kenzo Masuyama.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kenzo Masuyama
                <br />
                (Pisco)
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An executive member of the Black Organization and a family
                friend of the Miyanos. His last assignment was to assassinate a
                politician. He was killed by Gin for getting caught in the act.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Calvados.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Calvados</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization, another sniper. Kills himself
                after Shuichi Akai disables him. He was in love with Vermouth.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Rikumichi Kusuda.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Rikumichi Kusuda
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Member of the Black Organization, who pretended to be a patient
                at the hospital holding Kir. He commits suicide when his cover
                is blown. His corpse is used to fake Shuichi Akai's death.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ki'ichiro Numabuchi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ki'ichiro Numabuchi
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Cornelius Graver
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Serial killer whom Conan runs into a few times. Former member of
                the Black Organization, who was scheduled to be the original
                test subject for APTX 4869 prior to his escape.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Others</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Kohji Haneda.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kohji Haneda
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kohji Haneda
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Shukichi's non-blood brother and a professional shogi player. He
                was forced to take APTX 4869, and died as a result 17 years ago.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Amanda Hughes.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Amanda Hughes
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A rich American businesswoman killed in the case from 17 years
                ago. She was most likely targeted by the Black Organization
                because of her ties to the FBI.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Mysterious Old Man with Bird.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mysterious Old Man with Bird
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A mysterious character shown in a large luxurious room with a
                hawk.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Mysterious Old Man.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mysterious Old Man
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A mysterious character shown in a luxurious car wearing a
                breather.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img
                  src="./src/assets/images/WikiImage/Mysterious man with sunglasses.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mysterious man with sunglasses
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A mysterious character shown as the driver of the mysterious Old
                Man.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/The Criminal.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                "The Criminal"
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                "The Criminal"
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A generic depiction taking the place of an unknown culprit.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Scar Akai.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Scar Akai</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Shuichi Akai disguise used by Bourbon and Vermouth to find out
                if the real Akai is dead and to lure out Sherry.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ryusuke Higo.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ryusuke Higo
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A famous soccer player formerly playing for Noir Tokyo, before
                being drafted to Big Osaka. Haibara is a huge fan of his.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Hideo Akagi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Hideo Akagi
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Harrison Acres
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Ace soccer player for the Tokyo Spirits. Became acquainted with
                Conan after he helped solve the kidnapping of his younger
                brother.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Magic Kaito</h3>

        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Picture</th>
              <th style={{ width: "175px" }}>Name</th>
              <th style={{ width: "175px" }}>English Name</th>
              <th style={{ width: "600px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kaito Kuroba.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kaito Kuroba
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kaito Kuroba
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                High school student and magician. Aoko Nakamori's childhood
                friend, and love interest. Son of world-renowned magician Toichi
                Kuroba.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kaitou Kid.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Kaitou Kid</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Phantom Thief Kid
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Secret identity of Kaito Kuroba. Magician and thief, also known
                to be "uncatchable".
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Aoko Nakamori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Aoko Nakamori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Kaito Kuroba's childhood friend, and love interest. Daughter of
                Ginzo Nakamori.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Ginzo Nakamori.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Ginzo Nakamori
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Mace Fuller
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Inspector from Tokyo Metropolitan Police 2nd Division, who is
                obsessed with capturing Kaitou Kid.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Toichi Kuroba.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Toichi Kuroba
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Toichi Kuroba
              </td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Kaito Kuroba's deceased father. Once a world-renowned magician
                and the original Kaitou Kid. He was the one who taught Yukiko
                Kudo and Sharon Vineyard how to make a perfect disguise.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Chikage Kuroba.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Chikage Kuroba
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Kaito Kuroba's mother. Before meeting her husband, she was a
                jewel thief known as Phantom Lady.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Konosuke Jii.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Konosuke Jii
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                Once Toichi Kuroba's attendant and friend, now Kaito's
                assistant.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Kaitou Corbeau.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Kaitou Corbeau
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A mysterious thief that looks like Kaitou Kid in black clothing.
                He recently emerged in Las Vegas before coming to Japan to
                target the Midnight Crow.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Akako Koizumi.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Akako Koizumi
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                A witch who wishes to seduce Kaitou Kid and enslave all men.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Saguru Hakuba.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>
                Saguru Hakuba
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                High school detective trying to catch Kaitou Kid.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Snake.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Snake</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                The primary antagonist, a member of the Magic Kaito Organization
                who is responsible for murdering Toichi Kuroba.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: "60px" }}>
                <img src="./src/assets/images/WikiImage/Spider.jpg" />
              </td>
              <td style={{ width: "125px", lineHeight: "15px" }}>Spider</td>
              <td style={{ width: "125px", lineHeight: "15px" }}>N/A</td>
              <td
                style={{ width: "600px", padding: "0 5px", textAlign: "left" }}
              >
                An anime-only character who works for the Magic Kaito
                Organization as an assassin. His public persona is a stage
                performer and illusionist named Gunter Von Goldberg II.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WikiScreen;
