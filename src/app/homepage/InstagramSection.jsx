import InstagramCard from './SocialMediaSection';
import styles from '../assets/css/InstagramSection.module.css';

const reels = [
  { thumbnail: '/reels/1.jpg', views: '1M' },
  { thumbnail: '/reels/2.jpg', views: '717K' },
  { thumbnail: '/reels/3.jpg', views: '1M' },
  { thumbnail: '/reels/4.jpg', views: '92.7K' },
];

export default function InstagramSection() {
  return (
    <div className={styles.wrapper}>
      <h2>CHECK OUT <span>OUR SOCIAL MEDIA!</span></h2>
      <div className={styles.grid}>
        {reels.map((reel, i) => (
          <InstagramCard key={i} thumbnail={reel.thumbnail} views={reel.views} />
        ))}
      </div>
      <button className={styles.followBtn}>
        <img src="/insta.svg" alt="Insta" /> FOLLOW US ON INSTAGRAM
      </button>
    </div>
  );
}
