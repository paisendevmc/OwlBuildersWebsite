import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BootstrapCarousel from './carousel'
import Link from 'next/link'

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
              <div className={styles.landingheaderbg}></div>
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
            <div className={styles.ourprojects2}>
              <div className={styles.landingheaderdesc1}>Товары</div>
              <div className={styles.productList}>
                <Link href={'https://vk.com/uslugi-200194183?w=product-200194183_6713636%2Fquery'}>
                <div className={styles.product}>
                  <div className={styles.productcontent}>
                  <div className={styles.productinfo}>
                    <img src='https://sun9-west.userapi.com/sun9-55/s/v1/s2/zZPmuo__53-wpj5tU_-SStKHt_Mb7gxytbMAj13-UTQ9aWrWZf-oj7mfJAU5CXnsL9xovHf5JpnVJH7nxNuj6eQ.jpg' width='128px' height='128px' className={styles.productlogo}/>
                    <div className={styles.productprice}>от 670 ₽</div>  
                  </div>
                  <div>
                    <div className={styles.productname}>Lobby/Hub</div>
                    <div className={styles.producttext}>Это отличный вариант для вашего сервера. Объемное количество мест, чтоб игроки могли познакомиться с вашим сервером, а небе можно написать его название и оно будет идеально видно со всех сторон. Приятная архитектура и играбельный ландшафт ждут вас!</div>
                  </div>
                  </div>
                </div></Link>
                <Link href={'https://vk.com/uslugi-200194183?w=product-200194183_6658911%2Fquery'}>
                <div className={styles.product}>
                  <div className={styles.productcontent}>
                  <div className={styles.productinfo}>
                    <img src='https://sun9-west.userapi.com/sun9-50/s/v1/s2/kXHomFOjLA1HODbC7y3Fo4Q78ysi1P4NhmEvqcSyQC7Hj4sDTQJ2A_JgnUXKs3GlsfctOI7lY9Y8kEN2zt22EiU.jpg' width='128px' height='128px' className={styles.productlogo}/>
                    <div className={styles.productprice}>от 590 ₽</div>  
                  </div>
                  <div>
                    <div className={styles.productname}>Mini-games</div>
                    <div className={styles.producttext}>Играть удобно, когда рядом — красивая , практичная и играбельная мини игра, созданный специально для тебя, что бы вы смогли поиграть с другом. С учётом твоих желаний и особенностей твоего сервера.</div>
                  </div>
                  </div>
                </div></Link>
                <Link href={'https://vk.com/uslugi-200194183?w=product-200194183_6658910%2Fquery'}>
                <div className={styles.product}>
                  <div className={styles.productcontent}>
                  <div className={styles.productinfo}>
                    <img src='https://sun9-west.userapi.com/sun9-55/s/v1/s2/zZPmuo__53-wpj5tU_-SStKHt_Mb7gxytbMAj13-UTQ9aWrWZf-oj7mfJAU5CXnsL9xovHf5JpnVJH7nxNuj6eQ.jpg' width='128px' height='128px' className={styles.productlogo}/>
                    <div className={styles.productprice}>от 690 ₽</div>
                  </div>
                  <div>
                    <div className={styles.productname}>Spawn</div>
                    <div className={styles.producttext}>Играть удобно, когда рядом — красивый, практичный и функциональный спавн, созданный специально для тебя, с учётом твоих желаний и особенностей твоего сервера.</div>
                  </div>
                  </div>
                </div></Link>
              </div>
            </div>
            <div className={styles.ourprojects2}>
              <div className={styles.landingheaderdesc1}>Отзывы</div>
              <div className={styles.reviewsList}>
                <div className={styles.review}>
                  <div className={styles.reviewauthor}>Сергей Докторов</div>
                  <div className={styles.reviewtext}>Ребят, кто заказывает у оффициальной компании Owl Builders | Спавны, Хабы, Декор, заказывайте! Даже не думайте! У них целая команда, в кратце, Ребят ну это топчик! Такие спавны строят, аж - дух захватывает! Советую!!!</div>
                </div>
                <div className={styles.review}>
                  <div className={styles.reviewauthor}>Дмитрий Белов</div>
                  <div className={styles.reviewtext}>Заказывал лобби регистрации, для своего сервера, сделали все быстро, качественно и эффективно. Если вам нужны качественные карты то заказывайте у них</div>
                </div>
                <div className={styles.review}>
                  <div className={styles.reviewauthor}>Валентин Бортников</div>
                  <div className={styles.reviewtext}>Ребята очень дружелюбные и отзывчивые, никаких проблем в общении и коммуникации не возникало, строят невероятно круто за столь низкую цену, считаю лучшими в своем деле по праву, на все пожелания очень оперативно реагируют, не сомневайся доверить им постройку своего проекта</div>
                </div>
              </div>
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
                  <div className={styles.footersecl}>Документы</div>
                  <a className={styles.footersecll} href="https://vk.com/topic-200194183_46716027">Пользовательские соглашение</a>
                  <a className={styles.footersecll} href="https://vk.com/topic-200194183_48058478">FAQ</a>
                </div>
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
