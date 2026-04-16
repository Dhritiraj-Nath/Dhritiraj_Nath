import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, ExternalLink, Play } from "lucide-react";
import TiltCard from "./TiltCard";

interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  published: string;
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // YouTube RSS feed wrapped in an RSS-to-JSON proxy
        const channelId = "UCYWjzhtf6tn4jK4efVGx2gA";
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();

        if (data.status === 'ok') {
          const fetchedVideos = data.items.slice(0, 3).map((item: any) => ({
            id: item.guid.split(":")[2],
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${item.guid.split(":")[2]}/maxresdefault.jpg`,
            published: new Date(item.pubDate).toLocaleDateString(),
          }));
          setVideos(fetchedVideos);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="vlogs" className="py-24 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold font-syne mb-4"
            >
              Latest <span className="text-gradient">Vlogs & Tech</span>
            </motion.h2>
            <p className="text-muted-foreground max-w-xl">
              I share my journey in Cloud, DevOps, and Open Source through video. Here are some of my latest uploads from YouTube.
            </p>
          </div>
          <a
            href="https://youtube.com/@dhritirajnath-g1f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600/10 text-red-500 rounded-xl hover:bg-red-600/20 transition-colors font-semibold group w-fit"
          >
            <Youtube size={20} />
            <span>Visit Channel</span>
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard>
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block glass rounded-2xl overflow-hidden group h-full"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                          <Play size={24} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-mono text-primary mb-2">{video.published}</p>
                      <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSection;
