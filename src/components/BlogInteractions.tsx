import { useState, useEffect } from 'react';
import { Heart, Eye, Share2, MessageCircle } from 'lucide-react';
import { supabase, BlogStats } from '@/lib/supabase';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

interface BlogInteractionsProps {
  slug: string;
  className?: string;
}

const STORAGE_KEY = 'blog_user_likes';
const MAX_LIKES = 5;

const getStoredLikes = (): Record<string, number> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const setStoredLikes = (likes: Record<string, number>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
};

const triggerConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'],
  });
};

const BlogInteractions = ({ slug, className }: BlogInteractionsProps) => {
  const [stats, setStats] = useState<BlogStats | null>(null);
  const [userLikes, setUserLikes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);

  // Fetch stats and track view
  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase
        .from('blog_stats')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error && error.code === 'PGRST116') {
        // Row doesn't exist, create it
        const { data: newData } = await supabase
          .from('blog_stats')
          .insert({ slug, likes: 0, views: 1 })
          .select()
          .single();
        
        if (newData) setStats(newData);
      } else if (data) {
        setStats(data);
        
        // Increment view count (once per session)
        const viewedKey = `viewed_${slug}`;
        if (!sessionStorage.getItem(viewedKey)) {
          sessionStorage.setItem(viewedKey, 'true');
          await supabase
            .from('blog_stats')
            .update({ views: data.views + 1 })
            .eq('slug', slug);
          setStats(prev => prev ? { ...prev, views: prev.views + 1 } : null);
        }
        setHasViewed(true);
      }
    };

    fetchStats();

    // Get user's stored likes for this post
    const storedLikes = getStoredLikes();
    setUserLikes(storedLikes[slug] || 0);
  }, [slug]);

  const handleLike = async () => {
    if (userLikes >= MAX_LIKES || !stats) return;

    setIsAnimating(true);
    triggerConfetti();

    // Update local state
    const newUserLikes = userLikes + 1;
    setUserLikes(newUserLikes);
    setStats(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);

    // Store in localStorage
    const storedLikes = getStoredLikes();
    storedLikes[slug] = newUserLikes;
    setStoredLikes(storedLikes);

    // Update database
    await supabase
      .from('blog_stats')
      .update({ likes: stats.likes + 1 })
      .eq('slug', slug);

    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url);
      // Could add a toast notification here
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className={cn("flex items-center gap-3 flex-wrap", className)}>
      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={userLikes >= MAX_LIKES}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200",
          "hover:bg-muted/50 hover:border-primary/30",
          userLikes >= MAX_LIKES 
            ? "opacity-60 cursor-not-allowed" 
            : "cursor-pointer active:scale-95",
          isAnimating && "scale-110"
        )}
        title={userLikes >= MAX_LIKES ? "You've reached max likes!" : `Like (${userLikes}/${MAX_LIKES} used)`}
      >
        <Heart
          className={cn(
            "w-4 h-4 transition-all duration-200",
            userLikes > 0 ? "fill-red-500 text-red-500" : "text-muted-foreground",
            isAnimating && "scale-125"
          )}
        />
        <span className="text-sm font-medium">
          {stats ? formatNumber(stats.likes) : '—'}
        </span>
      </button>

      {/* Views */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/30">
        <Eye className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">
          {stats ? formatNumber(stats.views) : '—'}
        </span>
      </div>

      {/* Comments (placeholder for future) */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/30">
        <MessageCircle className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">0</span>
      </div>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover:bg-muted/50 hover:border-primary/30 active:scale-95"
      >
        <Share2 className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">Share</span>
      </button>

      {/* Like progress indicator */}
      {userLikes > 0 && userLikes < MAX_LIKES && (
        <span className="text-xs text-muted-foreground ml-2">
          {MAX_LIKES - userLikes} likes left
        </span>
      )}
    </div>
  );
};

export default BlogInteractions;
