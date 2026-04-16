import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import TiltCard from "./TiltCard";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  source: "Dev.to" | "Medium";
}

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch from Dev.to
        const devtoRes = await fetch("https://dev.to/api/articles?username=dhritiraj_nath_212b175585");
        const devtoData = await devtoRes.json();
        const devtoPosts = (devtoData || []).slice(0, 3).map((p: any) => ({
          title: p.title,
          link: p.url,
          pubDate: p.published_at,
          thumbnail: p.cover_image || "https://images.unsplash.com/photo-1488590528505-98d2b5958447",
          source: "Dev.to",
        }));

        // Fetch from Medium (via RSS2JSON)
        const mediumRes = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ndhritiraj3"
        );
        const mediumData = await mediumRes.json();
        const mediumPosts = (mediumData.items || []).slice(0, 3).map((p: any) => ({
          title: p.title,
          link: p.link,
          pubDate: p.pubDate,
          thumbnail: p.thumbnail || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          source: "Medium",
        }));

        const combined = [...devtoPosts, ...mediumPosts].sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
        setPosts(combined);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 px-6 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-2">
            Writing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-12">Latest Articles & Vlogs</h2>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[300px] rounded-xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <TiltCard key={post.link}>
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative glass rounded-xl overflow-hidden flex flex-col h-full"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                        {post.source}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <BookOpen size={14} className="text-primary" />
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center text-sm font-medium text-primary gap-2">
                      Read Article <ExternalLink size={14} />
                    </div>
                  </div>
                </motion.a>
              </TiltCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
