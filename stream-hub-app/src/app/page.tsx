import styles from "./page.module.css";
import FeaturedCarousel from "@/components/carousel/FeaturedCarousel";
import Playlist from "@/components/playlist/Playlist";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FeaturedCarousel />
        <Playlist />
      </main>
    </div>
  );
}
