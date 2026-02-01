import { useState, useEffect } from 'react';
import { Heart, Share2 } from 'lucide-react';
import { supabase, BlogStats } from '@/lib/supabase';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

interface BlogInteractionsProps {
  slug: string;
  className?: string;
  variant?: 'inline' | 'bottom';
}

const STORAGE_KEY = 'blog_user_likes';
const STORAGE_KEY_CLAPS = 'blog_user_claps';
const MAX_REACTIONS = 50;

const getStoredReactions = (key: string): Record<string, number> => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const setStoredReactions = (key: string, reactions: Record<string, number>) => {
  localStorage.setItem(key, JSON.stringify(reactions));
};

const triggerConfetti = (intensity: 'low' | 'high' = 'low') => {
  const config = intensity === 'high' 
    ? { particleCount: 150, spread: 100, origin: { y: 0.6 } }
    : { particleCount: 30, spread: 50, origin: { y: 0.7 } };
  
  confetti({
    ...config,
    colors: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'],
  });
};

const triggerMaxConfetti = () => {
  const duration = 2000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

const BlogInteractions = ({ slug, className, variant = 'inline' }: BlogInteractionsProps) => {
  const [stats, setStats] = useState<BlogStats | null>(null);
  const [userLikes, setUserLikes] = useState(0);
  const [userClaps, setUserClaps] = useState(0);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);
  const [isClapAnimating, setIsClapAnimating] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase
        .from('blog_stats')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error && error.code === 'PGRST116') {
        const { data: newData } = await supabase
          .from('blog_stats')
          .insert({ slug, likes: 0, views: 0 })
          .select()
          .single();
        
        if (newData) setStats(newData);
      } else if (data) {
        setStats(data);
      }
    };

    fetchStats();

    const storedLikes = getStoredReactions(STORAGE_KEY);
    const storedClaps = getStoredReactions(STORAGE_KEY_CLAPS);
    setUserLikes(storedLikes[slug] || 0);
    setUserClaps(storedClaps[slug] || 0);
  }, [slug]);

  const handleLike = async () => {
    if (userLikes >= MAX_REACTIONS || !stats) return;

    const newUserLikes = userLikes + 1;
    const wasAtMax = newUserLikes === MAX_REACTIONS;
    
    setIsLikeAnimating(true);
    
    if (wasAtMax) {
      triggerMaxConfetti();
    } else {
      triggerConfetti(newUserLikes % 10 === 0 ? 'high' : 'low');
    }

    setUserLikes(newUserLikes);
    setStats(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);

    const storedLikes = getStoredReactions(STORAGE_KEY);
    storedLikes[slug] = newUserLikes;
    setStoredReactions(STORAGE_KEY, storedLikes);

    await supabase
      .from('blog_stats')
      .update({ likes: stats.likes + 1 })
      .eq('slug', slug);

    setTimeout(() => setIsLikeAnimating(false), 150);
  };

  const handleClap = async () => {
    if (userClaps >= MAX_REACTIONS || !stats) return;

    const newUserClaps = userClaps + 1;
    const wasAtMax = newUserClaps === MAX_REACTIONS;
    
    setIsClapAnimating(true);
    
    if (wasAtMax) {
      triggerMaxConfetti();
    } else {
      triggerConfetti(newUserClaps % 10 === 0 ? 'high' : 'low');
    }

    setUserClaps(newUserClaps);
    setStats(prev => prev ? { ...prev, views: prev.views + 1 } : null);

    const storedClaps = getStoredReactions(STORAGE_KEY_CLAPS);
    storedClaps[slug] = newUserClaps;
    setStoredReactions(STORAGE_KEY_CLAPS, storedClaps);

    await supabase
      .from('blog_stats')
      .update({ views: stats.views + 1 })
      .eq('slug', slug);

    setTimeout(() => setIsClapAnimating(false), 150);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (variant === 'bottom') {
    return (
      <div className={cn("flex flex-col items-center gap-6 py-12", className)}>
        <p className="text-muted-foreground text-center">
          If you liked this blog, give it a reaction!
        </p>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            disabled={userLikes >= MAX_REACTIONS}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
              "hover:bg-muted/50 hover:border-primary/30 hover:scale-105",
              userLikes >= MAX_REACTIONS 
                ? "opacity-60 cursor-not-allowed border-primary/50 bg-primary/5" 
                : "cursor-pointer active:scale-95",
              isLikeAnimating && "scale-110"
            )}
          >
            <Heart
              className={cn(
                "w-8 h-8 transition-all duration-200",
                userLikes > 0 ? "fill-red-500 text-red-500" : "text-muted-foreground",
                isLikeAnimating && "scale-125"
              )}
            />
            <span className="text-lg font-semibold">
              {stats ? formatNumber(stats.likes) : '—'}
            </span>
          </button>

          <button
            onClick={handleClap}
            disabled={userClaps >= MAX_REACTIONS}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
              "hover:bg-muted/50 hover:border-primary/30 hover:scale-105",
              userClaps >= MAX_REACTIONS 
                ? "opacity-60 cursor-not-allowed border-primary/50 bg-primary/5" 
                : "cursor-pointer active:scale-95",
              isClapAnimating && "scale-110"
            )}
          >
            <span className={cn(
              "text-3xl transition-all duration-200",
              isClapAnimating && "scale-125"
            )}>
              👏
            </span>
            <span className="text-lg font-semibold">
              {stats ? formatNumber(stats.views) : '—'}
            </span>
          </button>
        </div>

        {(userLikes > 0 || userClaps > 0) && (userLikes < MAX_REACTIONS || userClaps < MAX_REACTIONS) && (
          <p className="text-xs text-muted-foreground">
            {MAX_REACTIONS - Math.max(userLikes, userClaps)} reactions left
          </p>
        )}

        {(userLikes >= MAX_REACTIONS || userClaps >= MAX_REACTIONS) && (
          <p className="text-xs text-primary font-medium">
            Thanks for all the love! 🎉
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      <button
        onClick={handleLike}
        disabled={userLikes >= MAX_REACTIONS}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200",
          "hover:bg-muted/50 hover:border-primary/30",
          userLikes >= MAX_REACTIONS 
            ? "opacity-60 cursor-not-allowed" 
            : "cursor-pointer active:scale-95",
          isLikeAnimating && "scale-105"
        )}
      >
        <Heart
          className={cn(
            "w-4 h-4 transition-all duration-200",
            userLikes > 0 ? "fill-red-500 text-red-500" : "text-muted-foreground",
            isLikeAnimating && "scale-110"
          )}
        />
        <span className="text-sm font-medium">
          {stats ? formatNumber(stats.likes) : '—'}
        </span>
      </button>

      <button
        onClick={handleClap}
        disabled={userClaps >= MAX_REACTIONS}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200",
          "hover:bg-muted/50 hover:border-primary/30",
          userClaps >= MAX_REACTIONS 
            ? "opacity-60 cursor-not-allowed" 
            : "cursor-pointer active:scale-95",
          isClapAnimating && "scale-105"
        )}
      >
        <span className="text-sm">👏</span>
        <span className="text-sm font-medium">
          {stats ? formatNumber(stats.views) : '—'}
        </span>
      </button>

      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 hover:bg-muted/50 hover:border-primary/30 active:scale-95"
      >
        <Share2 className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">Share</span>
      </button>
    </div>
  );
};

export default BlogInteractions;
