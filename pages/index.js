import Link from 'next/link';
import config from '../config';
import VideoSection from '../components/VideoSection';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>欢迎来到PCB资源分享网站</h1>
      <p>这里是一个专注于PCB学习与分享的平台，包含文章、视频和实用资源。</p>

      <div style={{ marginTop: '1rem' }}>
        <a href={config.xiaohongshu} target="_blank" rel="noopener noreferrer">📎 小红书</a> | 
        <a href={config.douyin} target="_blank" rel="noopener noreferrer">📎 抖音</a>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>精选文章</h2>
      <div className="article-card">
        <h3>PCB基础知识</h3>
        <p>PCB（Printed Circuit Board，印刷电路板）是电子设备中用于连接和支撑电子元件的基础平台。它通过导电路径、焊盘和其他特征将电子元件连接在一起，实现电路功能。</p>
        <Link href="/posts/pcb-basics">阅读全文</Link>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <VideoSection />
    </div>
  );
}
