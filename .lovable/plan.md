
## Remove Social Links from Home Page

### What Will Be Removed
The row of social media icons (X, LinkedIn, YouTube, Instagram, Email) that appears below the "Get in touch" button on the home page.

### Changes
**File: `src/components/Hero.tsx`**
- Remove the `<SocialLinks />` component call from the Hero section (line 66)
- Remove the entire `SocialLinks` component definition (lines 71-94) since it won't be used anymore

### Result
The Hero section will end with just the "Get in touch" button, providing a cleaner look without the social media links below it.

---

### Technical Details
- Delete line 66: `<SocialLinks />`
- Delete lines 71-94: The entire `SocialLinks` component function
