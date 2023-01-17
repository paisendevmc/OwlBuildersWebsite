import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import styles from '@/styles/Home.module.css'

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.car}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} className={styles.carimg} alt="slides" height='720' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}