# Home Screen Section Order

## Complete Section Flow (Top to Bottom)

1. **Header**
   - Location display
   - User avatar
   - Notifications icon

2. **Search Bar**
   - Search input field
   - Placeholder: "Search for cleaning, electrical..."

3. **Highlights** (Hero Carousel)
   - Special offers banner
   - Emergency repairs banner
   - Auto-scrolling carousel

4. **All Categories** (Horizontal Scroll)
   - 6 category icons
   - Action: "View All" → `/categories`

5. **Featured Services** (Vertical Cards) ⭐ NEW
   - 4 services with horizontal layout
   - Image left (128px) + Content right
   - Action: "View All" → `/popular-services`
   - Each card clickable → `/popular-services`

6. **Special Offers** (Horizontal Scroll) ⭐ NEW
   - 3 gradient offer cards
   - Promo codes displayed
   - Action: "View All" → `/popular-services`
   - Each card clickable → `/popular-services`

7. **Recommended for You** (Horizontal Scroll)
   - Reversed service list
   - Action: "See All" → `/popular-services`
   - Each card clickable → `/service/[serviceId]`

8. **Why Choose Us** (2-Column Grid) ⭐ NEW
   - 4 benefit cards in 2x2 grid
   - Colored icons with descriptions
   - Action: "Learn More" → `/popular-services`
   - Each card clickable → `/popular-services`

9. **Top Rated Providers** (Horizontal Scroll)
   - 4 provider cards
   - Action: "View All" → `/top-providers`
   - Each card clickable → `/top-providers`

10. **How It Works** (Vertical Timeline) ⭐ NEW
    - 4 step cards with connecting lines
    - Step numbers: 01, 02, 03, 04
    - Action: "Get Started" → `/popular-services`
    - Each card clickable → `/popular-services`

11. **Popular Services** (Vertical List)
    - 3 full service cards
    - Action: "View All" → `/popular-services`
    - Each card clickable → `/service/[serviceId]`
    - "Book Now" button → `/service/[serviceId]`

---

## New Components Summary

### FeaturedServiceCard
- **Layout**: Horizontal (Image Left + Content Right)
- **Size**: Full width, ~120px height
- **Content**: Icon, Rating, Title, Description (2 lines), Price, Book button

### SpecialOfferCard
- **Layout**: Horizontal scroll card
- **Size**: 288px width (72 * 4)
- **Content**: Gradient background, Icon, Discount badge, Title, Description, Promo code

### BenefitCard
- **Layout**: Grid item (48% width)
- **Size**: Half width with gap
- **Content**: Colored icon background, Title, Description

### HowItWorksCard
- **Layout**: Vertical timeline item
- **Size**: Full width
- **Content**: Step badge, Icon, Connecting line, Title, Description

---

## Navigation Summary

### Existing Routes Used:
- `/categories` - All categories screen
- `/popular-services` - Popular services list
- `/top-providers` - Top providers list
- `/service/[serviceId]` - Individual service detail

### All Sections Are Clickable:
✅ Categories → Navigate to categories
✅ Featured Services → Navigate to popular services
✅ Special Offers → Navigate to popular services
✅ Recommended → Navigate to service detail
✅ Benefits → Navigate to popular services
✅ Top Providers → Navigate to top providers
✅ How It Works → Navigate to popular services
✅ Popular Services → Navigate to service detail

---

## Data Files Modified

### `constants/data.ts`
Added:
- `featuredServices` (4 items)
- `benefits` (4 items)
- `specialOffers` (3 items)
- `howItWorksSteps` (4 items)

### Components Created
- `components/home/FeaturedServiceCard.tsx`
- `components/home/BenefitCard.tsx`
- `components/home/SpecialOfferCard.tsx`
- `components/home/HowItWorksCard.tsx`

### Main File Updated
- `app/(root)/(tabs)/Home.tsx` - Added all new sections with proper navigation
