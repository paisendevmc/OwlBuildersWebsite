import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BootstrapCarousel from './carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Owl Builders</title>
        <meta name="description" content="Minecraft builders!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://sun1.userapi.com/sun1-25/s/v1/ig2/wB3fZmoXNKQlfJ6E-tx9Br-UbudYoEvpewI6XsbwmCpOX2YosGBYrR9nokJbWc8GABXRXrfI-BbWLwTFJO4XMBKk.jpg?size=971x1242&quality=95&type=album" />
      </Head>
      <main>
        <div className={styles.landing}>
          <div className={styles.landingmenu}>
            <div className={styles.menu}>
              <div className={styles.menubackdrop}></div>
              <div className={styles.menuwrap}>
                <div className={styles.menuitem}>
                  <div className={styles.menulogo}>
                    <img src='OwlLogo.svg'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.landingheader}>
            <div className={styles.landingheadercontent}>
              <h1 className={styles.landingheadertitle}>Возьмём ваш проект, под свое крыло</h1>
              <div className={styles.landingheaderdesc}>Owl Builders - объединение билдеров, мы занимаемся разработкой различных карт для ваших серверов.</div>
              <div className={styles.landingheaderbtn}>
                <a className={styles.btnl1} href="https://vk.com/club200194183">
                  <div className={styles.btnl1c}>
                    <span className={styles.btnl1t}>Перейти в нашу группу VK</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.landingcontent}>
          <div className={styles.landingheaderdesc1}>Наши работы</div>
            <div className={styles.ourprojects}>
              <BootstrapCarousel />
            </div>
          </div>

          <div className={styles.landingfooter}>
            <div className={styles.landingfooterwrap}>
              <div className={styles.landingfootersec}>
              <div className={styles.menulogo}>
                    <img src='OwlLogo.svg'/>
                  </div>
              </div>
              <div className={styles.landingfootercontent}>
                <div className={styles.landingfootersec}>
                  <div className={styles.footersecl}>Социальные сети</div>
                  <a className={styles.footersecll} href="https://vk.com/club200194183">ВКонтакте</a>
                </div>
                <div className={styles.footercop}>
                  <a className={styles.footercopt} href="https://t.me/miyaki_xd">Сайт разработан TLPM STUDIOS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
