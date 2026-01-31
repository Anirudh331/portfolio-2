

## Remove Static Visitor Counter

The visitor counter showing "You are the 30,521st visitor" is just a hardcoded number - it's not actually tracking real visitors. I'll remove it from the footer.

### What I'll Do

**File: `src/components/Footer.tsx`**
- Remove lines 12-14 containing the fake visitor count paragraph
- The footer will keep:
  - The Bhagavad Gita quote
  - "Design & Built by Anirudh N Raiker"
  - Copyright notice

### Result

The footer will be cleaner without the misleading static visitor number.

---

**Note:** If you ever want a real visitor counter in the future, it would require:
- A backend database (like Supabase) to store and increment visit counts
- An API call on page load to record visits
- Logic to handle unique visitors vs. total page views

