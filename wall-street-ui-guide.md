# Classic Wall Street UI Design System
## For Financial Blog & Documentation Website

**Document Version:** 1.0  
**Target Audience:** Financial professionals, investors, financial advisors, researchers  
**Design Philosophy:** Professional minimalism with trust-centric aesthetics

---

## 1. EXECUTIVE OVERVIEW

This comprehensive design guide establishes a **classic Wall Street aesthetic** for your content-driven financial blog and documentation website. The system balances professional authority with modern accessibility, drawing from proven patterns used by Goldman Sachs, Morgan Stanley, JP Morgan Chase, and other leading financial institutions.

**Core Design Principles:**
- **Minimalist clarity** – eliminate distractions, prioritize content
- **Professional authority** – convey trust through refined typography and spacing
- **Scannable hierarchy** – guide users through complex financial information
- **Content-first approach** – design serves the information, not the reverse
- **Accessibility compliance** – WCAG 2.1 AA standards throughout

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Font Selection & Rationale

#### Primary Font Stack: **Times New Roman** (for headings)
- **Usage:** Main headings (H1, H2), article titles, hero sections
- **Why:** Serif typeface conveys classical authority and formal professionalism
- **Investment bank precedent:** Goldman Sachs, primary marketing materials
- **Digital implementation:** Consider `Garamond` as web-safe fallback for better screen rendering
- **Web font:** Use `Lora` or `Crimson Text` from Google Fonts as modern equivalent

#### Secondary Font Stack: **Arial** (for body and UI elements)
- **Usage:** Body text, documentation, UI labels, forms
- **Why:** Clean sans-serif maximizes readability at all screen sizes
- **Investment bank precedent:** JP Morgan Chase, internal communications
- **Digital implementation:** Use system fonts for performance: `-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`
- **Web alternative:** `Inter` or `Roboto` for modern aesthetics with improved legibility

#### Accent Font: **Arial Narrow** (for annotations and metadata)
- **Usage:** Timestamps, metadata tags, secondary information, captions
- **Width:** 85-90% of standard width
- **Font size:** Typically 11px-12px
- **Color:** Secondary text color (see color section)

### 2.2 Typography Hierarchy & Scale

**Heading Hierarchy:**
```
H1: 48px | Line-height: 1.2 | Weight: Bold | Letter-spacing: -0.02em
H2: 36px | Line-height: 1.3 | Weight: Bold | Letter-spacing: -0.01em
H3: 28px | Line-height: 1.4 | Weight: 600   | Letter-spacing: 0em
H4: 22px | Line-height: 1.4 | Weight: 600   | Letter-spacing: 0em
H5: 18px | Line-height: 1.5 | Weight: 600   | Letter-spacing: 0.01em
H6: 14px | Line-height: 1.6 | Weight: 600   | Letter-spacing: 0.02em
```

**Body Text:**
```
Body Copy:     16px | Line-height: 1.6 | Weight: 400
Small Text:    14px | Line-height: 1.6 | Weight: 400
Caption/Meta:  12px | Line-height: 1.5 | Weight: 400
Code/Data:     13px | Line-height: 1.5 | Weight: 400 | Monospace
```

**Key Specifications:**
- Maximum line length: 70-80 characters (optimal for reading financial content)
- Paragraph spacing: 24px between paragraphs
- Heading top spacing: 32px (or 2x baseline), bottom spacing: 16px
- Leading guidelines: Use 4px baseline grid for vertical rhythm

---

## 3. COLOR PALETTE

### 3.1 Primary Colors (Trust & Authority)

**Primary Blue – #003366** (Deep Navy)
- Primary CTA buttons, active navigation states, primary data points
- Conveys: Trust, stability, professionalism
- Usage: 30% of total color usage
- Lightened variants:
  - Light Blue: #E8EEF7 (backgrounds, hover states)
  - Medium Blue: #0066CC (secondary CTAs, links)

**Secondary Navy – #1A1A33** (Charcoal Black)
- Primary text, dark backgrounds, high-contrast elements
- Conveys: Authority, sophistication, weight
- Usage: 40% of total design
- Never pure black (#000000) – always use #1A1A33 for subtlety

**Financial Green – #007A33** (Wealth/Growth)
- Positive data indicators, gains, increases, bullish signals
- Revenue growth visualization, profit margins
- Usage: 15% (accent only)
- Lighter variant: #B2E0D4 (success backgrounds)

**Financial Red – #C60C30** (Loss/Risk)
- Negative data indicators, losses, decreases, bearish signals
- Market drops, expenses, warnings
- Usage: 10% (accent only)
- Lighter variant: #FFE8EC (alert backgrounds)

**Gold Accent – #D4AF37** (Wealth/Premium)
- Premium features, highlights, luxury positioning
- Report titles, featured articles
- Usage: 5% (sparingly)
- Lightened: #F5E6D3 (subtle backgrounds)

### 3.2 Neutral Colors (Structure & Readability)

**Off-White – #F9F9F9** (Primary background)
- Main content areas, card backgrounds
- Provides visual breathing room without harshness of pure white
- Improves contrast ratios for accessibility

**Light Gray – #E8E8E8** (Borders, dividers)
- Section separators, card borders, form field borders
- Subtle visual hierarchy without creating harsh lines

**Medium Gray – #666666** (Secondary text)
- Secondary information, metadata, timestamps
- Reduced prominence but maintains readability

**Dark Gray – #333333** (Tertiary text)
- Placeholder text, disabled states, captions

**Pure White – #FFFFFF** (Card surfaces, contrast)
- Premium card designs, modal backgrounds
- Use strategically within gray backgrounds for pop

### 3.3 Color Application Rules

**Text Contrast Requirements:**
- Body text on background: Minimum 4.5:1 (WCAG AA)
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1

**Data Visualization:**
- Gains/positive: Use Financial Green (#007A33)
- Losses/negative: Use Financial Red (#C60C30)
- Neutral/baseline: Use Primary Blue (#003366)
- Avoid simultaneous use of red and green without blue context

**Semantic Colors in Financial Charts:**
```
✓ Bullish trend:    #007A33 (Green)
✗ Bearish trend:    #C60C30 (Red)
→ Neutral change:   #003366 (Blue)
⚠ Warning/Alert:    #FF6B35 (Orange)
✓ Confirmation:     #007A33 (Green)
```

---

## 4. SPACING & LAYOUT SYSTEM

### 4.1 8-Point Grid Foundation

**Base unit:** 8px  
**Spacing scale:** 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px

**Application:**
- All margins and paddings must be multiples of 8px
- Create visual harmony and consistency across all screen sizes
- Reduces decision-making friction in design process

### 4.2 Container & Layout Structure

**Maximum content width:** 1200px (desktop)
- Sidebar content area: 280px (fixed, collapsible to 48px)
- Main content area: ~880px (with gutters)
- Mobile width: 100% with 16px margins on each side

**Gutter spacing:**
- Desktop: 24px between columns
- Tablet: 16px between columns
- Mobile: 16px on sides, 8px between stacked elements

**Margins:**
```
Container margins (desktop):    40px (top/bottom), 48px (left/right)
Container margins (tablet):     32px (top/bottom), 32px (left/right)
Container margins (mobile):     24px (top/bottom), 16px (left/right)
```

### 4.3 Card & Module Spacing

**Card padding (consistent across all card types):**
```
Premium/hero cards:    32px (all sides)
Standard cards:        24px (all sides)
Compact cards:         16px (all sides)
Minimal cards:         16px (horizontal), 8px (vertical)
```

**Spacing between cards:**
- Related content groups: 16px
- Unrelated sections: 32px-48px
- Major section breaks: 64px

**Internal card spacing:**
- Between card title and content: 16px
- Between content blocks: 12px
- Between list items: 8px

---

## 5. HEADER & NAVIGATION DESIGN

### 5.1 Header Structure

**Height:** 72px (desktop), 64px (tablet), 56px (mobile)  
**Background:** #FFFFFF with subtle 1px bottom border (#E8E8E8)  
**Sticky positioning:** Yes, on scroll down on desktop only

**Header elements (left to right):**

1. **Logo/Brand (16px-24px width)**
   - Size: 32px height
   - Padding right: 24px
   - Color: #003366

2. **Primary Navigation Menu (flexible)**
   - Font: Arial, 14px, 600 weight
   - Items: 5-7 maximum (Blog, Documentation, Research, Tools, Resources, About, Contact)
   - Spacing between items: 24px
   - Active state: #003366 with bottom border (2px)
   - Hover state: Color #0066CC
   - Mobile: Hamburger menu (3 lines, #333333)

3. **Search bar (optional, recommended)**
   - Width: 240px
   - Placeholder: "Search articles, documentation..."
   - Border: 1px #E8E8E8, rounded corners 4px
   - Icon: Search icon (#666666)

4. **CTA Button (right alignment)**
   - Primary button: "Get Started" / "Subscribe"
   - Secondary button: "Sign In" (text link only, no background)
   - Button styling: See CTA Button section (6.4)

### 5.2 Breadcrumb Navigation

**Position:** Below header, above main content  
**Font:** Arial, 12px, 400 weight  
**Color:** #666666  
**Separator:** " / " in #CCCCCC

**Example:** Home / Blog / Financial Analysis / Tech Stocks

**Spacing:**
- Top margin: 16px
- Bottom margin: 24px

### 5.3 Navigation Sidebar (Documentation Site)

**Width:** 280px (expanded), 48px (collapsed)  
**Position:** Fixed, left side  
**Background:** #F9F9F9  
**Border right:** 1px #E8E8E8

**Content structure:**
- Section headers: Arial, 12px, 700 weight, #333333, 16px padding
- Menu items: Arial, 13px, 400 weight, #666666
- Item padding: 12px horizontal, 8px vertical
- Hover background: #F0F0F0
- Active item: #003366 left border (3px), background #E8EEF7
- Indent subcategories: 16px left margin

**Collapse mechanism:**
- Toggle button: Top-right of sidebar
- Smooth animation: 300ms ease-out
- Icon preservation on collapse: Show only category icons

---

## 6. BUTTON & CALL-TO-ACTION DESIGN

### 6.1 Button Hierarchy & States

**Primary Button**
```
Background:    #003366 (Primary Blue)
Text:          #FFFFFF (White)
Border:        None
Padding:       12px 24px
Font:          Arial, 14px, 600 weight
Border-radius: 4px
Min-width:     120px
```

**Primary Button States:**
- Default: #003366
- Hover: #0052A3 (lighter shade)
- Active/Pressed: #001F4D (darker shade)
- Disabled: #CCCCCC with #999999 text
- Focus: 2px outline in #0066CC

**Secondary Button**
```
Background:    Transparent
Text:          #003366
Border:        1px solid #003366
Padding:       12px 24px
Font:          Arial, 14px, 600 weight
Border-radius: 4px
```

**Secondary Button States:**
- Hover: Background #E8EEF7
- Active: Background #D4E1F7

**Tertiary Button (Text Link)**
```
Background:    Transparent
Text:          #0066CC (Medium Blue)
Border:        None
Padding:       4px 0px (inline)
Font:          Arial, 14px, 400 weight with underline
Decoration:    Underline on default
```

**Tertiary Button States:**
- Hover: Color #003366, underline remains
- Visited: Color #7030A0 (Purple)

### 6.2 Call-to-Action (CTA) Specifications

**CTA Text Guidelines:**
- Length: 3-5 words maximum
- Action-oriented verbs: "Get," "Download," "Learn," "Explore," "Schedule," "Request"
- Benefit-focused: "Start Investing," "Get Your Report," "Calculate Your Returns"

**Recommended CTA Copy:**
- "Read More"
- "Download Guide"
- "Start Analysis"
- "Get Started"
- "Learn More"
- "Schedule Consultation"
- "Download Whitepaper"
- "View Report"
- "Calculate Now"
- "Explore Options"

**CTA Button Styling:**
- Minimum height: 44px (for touch accessibility)
- Minimum width: 120px
- Placement: Below article/section content
- Frequency: At least one per major section
- Color contrast: Primary Blue (#003366) on white = 8.5:1 ratio ✓

**CTA Positioning:**
- After introductory paragraph: Yes
- At end of long-form content: Yes (sticky footer)
- In sidebar: 1 primary CTA maximum
- In cards: Aligned to bottom of card
- Multiple CTAs: Stack vertically with 8px spacing

---

## 7. TYPOGRAPHY FOR FINANCIAL CONTENT

### 7.1 Blog Post Layout

**Article Title (H1)**
- Font: Times New Roman, 48px, Bold
- Color: #1A1A33 (Dark Navy)
- Margin top: 32px, Margin bottom: 16px
- Letter-spacing: -0.02em

**Article Meta Information**
- Position: Below title
- Font: Arial Narrow, 12px, #666666
- Format: "By [Author] | [Date] | [Est. Read Time]"
- Spacing: 8px below meta, 24px to body text

**Article Body**
- Font: Arial, 16px, Line-height: 1.6
- Color: #333333
- Paragraph spacing: 24px
- Maximum line length: 70-80 characters
- Use subheadings (H2, H3) every 250-300 words

**Subheadings in Articles**
- H2: Arial, 28px, 600 weight, #003366, Margin top: 32px, bottom: 16px
- H3: Arial, 22px, 600 weight, #1A1A33, Margin top: 24px, bottom: 12px

**Quote/Callout Blocks**
```
Background:     #E8EEF7 (Light Blue)
Left border:    4px solid #003366
Padding:        24px
Font:           Times New Roman, 16px, Italic
Color:          #1A1A33
Max-width:      100%
```

**Highlighted Financial Data**
- Background: #F5E6D3 (Gold accent)
- Font weight: 600
- Example: "The S&P 500 gained **2.45%** this quarter"

### 7.2 Documentation Page Formatting

**Documentation Title**
- Font: Times New Roman, 36px, Bold, #1A1A33
- Margin: 32px top, 24px bottom

**Section Headers**
- H2: Arial, 24px, 600 weight, #003366
- H3: Arial, 18px, 600 weight, #1A1A33
- H4: Arial, 14px, 700 weight, #333333 (for inline code headings)

**Code Blocks**
```
Font:              Courier New / Monaco (monospace)
Font-size:         13px
Line-height:       1.5
Background:        #F5F5F5
Border:            1px solid #E8E8E8
Padding:           16px
Border-radius:     4px
Color:             #333333
Max-width:         100% with horizontal scroll
```

**Parameter Lists / Tables**
- Font: Arial, 14px
- Header row: Bold, #003366 background, #FFFFFF text
- Data rows: Alternating #FFFFFF and #F9F9F9
- Padding: 12px per cell
- Border: 1px #E8E8E8 between rows

### 7.3 Financial Tables & Data Display

**Table Header**
```
Background:     #003366 (Primary Blue)
Text:           #FFFFFF
Font:           Arial, 13px, 600 weight
Padding:        12px 16px
Border:         None
```

**Table Data Cells**
```
Font:           Arial, 13px, 400 weight
Color:          #333333
Padding:        12px 16px
Border-bottom:  1px solid #E8E8E8
```

**Table Rows**
- Zebra striping: Even rows #F9F9F9, Odd rows #FFFFFF
- Hover state: Background #F0F5FF (very light blue)
- Alignment: Numbers right-aligned, text left-aligned

**Financial Data Highlights**
- Positive values: Arial, 13px, 600 weight, #007A33 (Green)
- Negative values: Arial, 13px, 600 weight, #C60C30 (Red)
- Neutral values: Arial, 13px, 400 weight, #333333

---

## 8. CARD & MODULE DESIGN

### 8.1 Article Preview Card

**Container:**
- Background: #FFFFFF
- Border: 1px solid #E8E8E8
- Padding: 24px
- Border-radius: 4px
- Box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04) (subtle shadow)
- Hover effect: Border color to #003366, shadow to 0px 4px 12px rgba(0, 0, 0, 0.08)

**Card Content Structure:**
```
1. Category tag        [12px, #0066CC background, #FFFFFF text, rounded 3px]
2. Title              [H3: 22px, Bold, #1A1A33]
3. Excerpt            [14px, #666666, 2-3 lines max]
4. Author + Date      [12px, #999999, Arial Narrow]
5. "Read More" CTA    [Secondary button style]
```

**Spacing within card:**
- Category to title: 12px
- Title to excerpt: 12px
- Excerpt to meta: 12px
- Meta to CTA: 16px

**Grid layout:** Cards display in 3-column grid on desktop, 1-2 columns on mobile

### 8.2 Data Visualization Card

**Card Header**
- Title: Arial, 16px, 600 weight, #1A1A33
- Description: Arial, 13px, #666666
- Top padding: 16px

**Chart Area**
- Padding: 16px (all sides)
- Background: #F9F9F9
- Min-height: 300px

**Chart Specifications:**
- Line charts: 2px stroke width, use Primary Blue (#003366)
- Bar charts: 4px gap between bars, use Primary Blue or Financial Green/Red
- Pie charts: Use 4-color palette max (Primary Blue, Green, Red, Gold)
- Axis labels: Arial, 11px, #666666
- Legend: Arial, 12px, left-aligned, 16px below chart

**Card Footer**
- Data source attribution: Arial, 11px, #999999
- Last updated: Arial, 11px, #999999
- Bottom padding: 16px

### 8.3 Testimonial/Quote Card

**Background:** #E8EEF7 (Light Blue)  
**Border left:** 4px solid #003366  
**Padding:** 24px (all sides)  
**Border-radius:** 4px

**Content:**
```
1. Quote text        [Times New Roman, 16px, Italic, #1A1A33]
2. Attribution       [Arial, 13px, 600 weight, #003366]
3. Title/Role        [Arial, 12px, #666666]
```

**Spacing:**
- Quote to attribution: 16px
- Attribution to role: 4px

---

## 9. FORM DESIGN

### 9.1 Input Field Specifications

**Text Input / Email Input / Number Input**
```
Border:           1px solid #E8E8E8
Background:       #FFFFFF
Padding:          12px 16px
Font:             Arial, 14px
Color:            #333333
Border-radius:    4px
Height:           44px (minimum, for touch)
Width:            100%
Focus state:      Border #003366, outline 2px #0066CC
Placeholder:      Arial, 14px, #CCCCCC
```

**Label**
```
Font:             Arial, 14px, 600 weight
Color:            #1A1A33
Margin-bottom:    8px
Required marker:  * in #C60C30 (Red)
```

**Help text**
```
Font:             Arial, 12px
Color:            #666666
Margin-top:       4px
```

**Error state**
```
Border:           2px solid #C60C30 (Red)
Background:       #FFF8F9
Error message:    Arial, 12px, #C60C30
Icon:             Warning icon in red
```

**Disabled state**
```
Border:           1px solid #E8E8E8
Background:       #F5F5F5
Color:            #CCCCCC
Cursor:           not-allowed
```

### 9.2 Form Layout

**Field spacing:**
- Vertical spacing between fields: 24px
- Fieldset margins: 32px top/bottom
- Legend font: Arial, 14px, 600 weight, #1A1A33

**Multi-column forms:**
- 2 columns on desktop (50% width each with 16px gutter)
- 1 column on tablet and mobile

**Button placement:**
- Align with left edge of first form field
- Margin-top: 32px
- Submit button (Primary), Secondary button (Cancel/Clear) - side by side on desktop

---

## 10. DATA VISUALIZATION GUIDELINES

### 10.1 Color Usage in Charts

**Financial Performance:**
```
Gains/Uptrends:     #007A33 (Financial Green)
Losses/Downtrends:  #C60C30 (Financial Red)
Baseline/Neutral:   #003366 (Primary Blue)
```

**Multi-category charts:**
- Color 1: #003366 (Primary Blue)
- Color 2: #007A33 (Financial Green)
- Color 3: #C60C30 (Financial Red)
- Color 4: #D4AF37 (Gold) - Use sparingly

### 10.2 Chart Type Guidelines

**Line Charts:** Ideal for trends over time
- Line thickness: 2-3px
- Point radius: 4px
- Grid lines: #E8E8E8, 1px
- Use for: Portfolio performance, market indices

**Bar Charts:** Best for comparing categories
- Bar width: Proportional to data spread
- Gap between bars: 8-16px
- Use for: Revenue by quarter, department comparisons

**Pie/Donut Charts:** Limited use (max 4 segments)
- Minimum segment size: 15% to avoid clutter
- Inner ring for donut: 40% of outer radius
- Segment labels: Outside with leader lines

**Heat Maps:** For correlation data
- Color intensity: Light (#E8EEF7) to dark (#003366)
- Cell padding: 4px
- Font: Arial, 11px

### 10.3 Accessibility in Visualizations

- Never rely on color alone – use patterns, labels, or icons
- Provide data table alternative for all charts
- Include alt text describing data insights
- Maintain 4.5:1 contrast for text on charts

---

## 11. RESPONSIVE DESIGN BREAKPOINTS

**Desktop:** 1200px and above
- Full sidebar navigation (280px)
- Multi-column layouts
- All features visible

**Tablet:** 768px to 1199px
- Collapsed sidebar (icons only) or hidden
- 2-column to 1-column layout
- Touch-friendly spacing increased to 48px

**Mobile:** Below 768px
- Full-width single column
- Hamburger navigation menu
- Minimum touch target: 44x44px
- Margins: 16px on each side
- Card padding: 16px
- Font sizes reduced by 2px for small screens

**Mobile-specific:**
- H1: 32px → 28px
- H2: 28px → 22px
- H3: 22px → 18px
- Body: 16px → 14px

---

## 12. SPECIFIC DESIGNS: POWERPOINT & PDF

### 12.1 PowerPoint Template Specifications

**Slide Master Setup:**

**Slide Dimensions:** 16:9 (Modern standard)

**Master Slide Design:**
- Background: White (#FFFFFF) with subtle gray gradient (optional)
- Header area: 80px height with top border 2px #003366
- Footer area: 40px height, gray text

**Slide Margin Guidelines:**
- Left/Right: 48px
- Top: 56px (below header)
- Bottom: 48px

**Title Slide:**
```
Main title:      Times New Roman, 54px, Bold, #1A1A33
Subtitle:        Arial, 28px, 400 weight, #666666
Company logo:    Bottom right, 60x60px
Spacing:         32px between title and subtitle
```

**Content Slide Layout:**
```
Title:           Times New Roman, 40px, Bold, #1A1A33
Bullet points:   Arial, 20px, 400 weight, #333333
Sub-bullets:     Arial, 16px, 400 weight, #666666
Bullet indent:   24px with 16px sub-indent
Line spacing:    1.5 between bullets
```

**Two-Column Slide:**
- Column 1 (Image/Chart): 45% width, left side
- Column 2 (Text): 50% width, right side
- Gutter: 5%

**Data Table Slide:**
- Header row: #003366 background, #FFFFFF text, Arial 16px bold
- Data rows: Arial, 14px, alternating #FFFFFF and #F9F9F9
- Cell padding: 12px
- Table border: 1px #E8E8E8

**Chart Slide:**
- Chart size: 70% of available area
- Chart title: Arial, 18px, 600 weight, #1A1A33
- Legend: Arial, 12px, positioned outside chart
- Axis labels: Arial, 11px, #666666
- Data labels on chart: Arial, 10px

**Transition & Animation:**
- Transitions: None or subtle "Fade" (0.3s)
- Animations: Minimal (bullet points fade in max)
- Duration: Keep brief (avoid distraction)

**Speaker Notes:**
- Font: Arial, 11px
- Recommend 3-4 sentences per slide
- Include key talking points, data sources

### 12.2 PDF Report Template Specifications

**Document Setup:**

**Page Format:** A4 (8.5" x 11") or Letter  
**Margins:** Top 0.75", Bottom 0.75", Left 1", Right 1"  
**Bleed:** None (for digital)

**Header (Repeating):**
- Height: 0.5"
- Content: Company logo (left, 0.4" height) | Page number (right, Arial 10px)
- Border-bottom: 1pt solid #003366

**Footer (Repeating):**
- Height: 0.5"
- Content: "Confidential" (left) | Date (center) | Document version (right)
- Font: Arial, 9px, #666666
- Border-top: 0.5pt solid #E8E8E8

**Title Page:**
```
Logo:             1.5" height, centered, top margin 1"
Title:            Times New Roman, 36pt, Bold, #1A1A33, top margin 1.5"
Subtitle:         Arial, 18pt, #666666, margin-top 12pt
Author/Date:      Arial, 11pt, #999999, margin-top 2"
Page number:      None on title page
```

**Body Pages:**

**Headings:**
- H1 (Section): Times New Roman, 24pt, Bold, #1A1A33, Page break before, margin-top 18pt
- H2: Arial, 18pt, Bold, #003366, margin-top 12pt, margin-bottom 6pt
- H3: Arial, 14pt, 600 weight, #1A1A33, margin-top 9pt

**Body text:**
- Font: Arial, 11pt
- Line-height: 1.5
- Color: #333333
- Paragraph spacing: 9pt before and after (equivalent to 12px)
- Justification: Left-aligned (not justified)

**Lists:**
- Bullet style: •  (Bullet character, 11pt, #003366)
- Indent: 0.25"
- Spacing: 6pt between items
- Sub-bullets: Use - (en-dash) with 0.5" indent

**Tables in PDF:**
- Header row: #003366 background, #FFFFFF text, Arial 10pt bold
- Data rows: Arial, 9pt
- Borders: 1pt solid #E8E8E8
- Cell padding: 8pt
- Alternating row color: Every other row #F9F9F9

**Figures & Charts:**
- Max width: 5.5" (allowing for margins)
- Caption: "Figure X: [Description]" in Arial 9pt, #666666, above chart
- Source note: Arial 8pt, #999999, below chart

**Page Breaks:**
- Add before H1 sections
- Avoid orphans/widows (keep minimum 2 lines at page break)
- No blank pages between sections

---

## 13. ACCESSIBILITY & COMPLIANCE

### 13.1 WCAG 2.1 AA Compliance

**Color Contrast:**
- Normal text: 4.5:1 minimum ratio
- Large text (18pt+): 3:1 minimum
- Graphics/UI components: 3:1 minimum

**Typography:**
- Minimum font size: 12px for body text (14px recommended)
- Line-height: Minimum 1.5 for body text
- Letter-spacing: Minimum 0.12em for improved readability

**Keyboard Navigation:**
- All interactive elements focusable via Tab key
- Focus indicator: Visible 2px outline in #0066CC
- Tab order: Logical, left-to-right, top-to-bottom

**Alternative Text:**
- Charts: Describe trends, key numbers, not just "chart image"
- Icons: Include aria-label or descriptive text
- PDFs: Include tagged structure for screen readers

### 13.2 Readability Metrics

**Flesch Reading Ease:** Target 50-60 (college level)
- Avoid jargon or define financial terms
- Use shorter sentences (max 15 words avg)
- Break text into paragraphs (max 5 sentences)

**Gunning Fog Index:** Target 12-14 (finance professional level)

---

## 14. BRAND CONSISTENCY GUIDELINES

### 14.1 Logo Usage

**Logo placement:**
- Header: 32px height (on desktop)
- Footer: 24px height
- Minimum clear space: 16px on all sides
- Never distort or change colors

### 14.2 Icon System

**Icon style:** Simple, geometric, 2px stroke weight  
**Colors:** Primary Blue (#003366) or Secondary Gray (#666666)  
**Sizing:** 16px (small), 24px (medium), 32px (large)  
**Padding:** 8px around icon for touch targets

**Icon usage:**
- Navigation: Main menu items
- Validation: Input validation states
- Data visualization: Legends, annotations
- Social links: Footer social media

### 14.3 Photography & Imagery

**Photography style:** Professional, minimalist, financial context  
**Restrictions:**
- Avoid clichéd "happy people with laptops" imagery
- Prefer charts, data, real financial materials
- Use actual charts over styled illustrations

**Image sizing:**
- Max width: Container width (responsive)
- Aspect ratios: 16:9 for hero, 4:3 for cards
- Compression: Optimize for web (50-100KB max)
- Format: WebP with JPG fallback

---

## 15. PERFORMANCE & TECHNICAL IMPLEMENTATION

### 15.1 Web Font Loading

**Font strategy:** System fonts for performance
```
Primary: 'Times New Roman', 'Garamond', serif
Secondary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif
```

**Web font fallback (if using Google Fonts):**
- Lora for Times New Roman replacement
- Inter/Roboto for Arial replacement
- Load via WOFF2 format only

### 15.2 CSS Grid System

**Base grid:** 12-column system on desktop  
**Column width:** calc(100% - [gutters]) / 12  
**Gutter width:** 24px (desktop), 16px (tablet), 16px (mobile)

**Common layouts:**
- Full width: 12 columns
- Sidebar + content: 3 columns sidebar, 9 columns content
- Two column: 6 + 6 columns
- Three column: 4 + 4 + 4 columns

---

## 16. IMPLEMENTATION CHECKLIST

### For Website Build:
- [ ] Typography hierarchy implemented with proper font sizing
- [ ] Color palette applied with correct hex values
- [ ] 8pt grid spacing system established
- [ ] Header/navigation responsive and sticky
- [ ] Card components standardized
- [ ] Form styles consistent across site
- [ ] Dark mode considerations (optional luxury feature)
- [ ] Accessibility audit completed (WCAG AA)
- [ ] Mobile responsiveness tested at all breakpoints
- [ ] Performance metrics optimized

### For PowerPoint Template:
- [ ] Master slide created with header/footer
- [ ] Font styles applied to all slide layouts
- [ ] Color palette defined in theme colors
- [ ] Chart default styling set
- [ ] Slide layouts created (title, content, 2-column, blank)
- [ ] Transitions and animations configured (minimal)

### For PDF Template:
- [ ] Page master setup with header/footer
- [ ] Paragraph styles defined for all heading levels
- [ ] Table styles consistent with design system
- [ ] Footer compliance information included
- [ ] Margins and spacing verified
- [ ] Charts/images properly sized
- [ ] PDF tagged for accessibility

---

## 17. DESIGN TOKENS QUICK REFERENCE

**Color Tokens:**
- `--color-primary: #003366`
- `--color-primary-light: #E8EEF7`
- `--color-primary-dark: #001F4D`
- `--color-text-primary: #1A1A33`
- `--color-text-secondary: #666666`
- `--color-success: #007A33`
- `--color-danger: #C60C30`
- `--color-background: #F9F9F9`
- `--color-border: #E8E8E8`

**Typography Tokens:**
- `--font-primary: 'Times New Roman', serif`
- `--font-secondary: Arial, sans-serif`
- `--font-mono: 'Courier New', monospace`
- `--size-body: 16px`
- `--size-h1: 48px`
- `--size-h2: 36px`
- `--size-h3: 28px`

**Spacing Tokens:**
- `--space-xs: 4px`
- `--space-sm: 8px`
- `--space-md: 16px`
- `--space-lg: 24px`
- `--space-xl: 32px`
- `--space-2xl: 48px`

**Sizing Tokens:**
- `--size-button-height: 44px`
- `--size-card-padding: 24px`
- `--size-container-max: 1200px`
- `--size-sidebar: 280px`

---

## 18. FINAL NOTES & BEST PRACTICES

### Do's:
✓ Prioritize content legibility above all  
✓ Use ample white space to reduce cognitive load  
✓ Maintain consistent typography hierarchy  
✓ Test color contrast for accessibility  
✓ Keep navigation intuitive and minimal  
✓ Use financial colors strategically (green/red for gains/losses)  
✓ Ensure touch targets are minimum 44px  
✓ Test on real devices, not just browsers  
✓ Optimize for the 80/20 use case (most common user journeys)

### Don'ts:
✗ Don't use pure black (#000000) – always use #1A1A33  
✗ Don't rely on color alone for meaning  
✗ Don't use decorative elements that distract from content  
✗ Don't exceed 4 colors in data visualizations (including neutral)  
✗ Don't use automatic font sizing – maintain explicit scales  
✗ Don't justify body text (creates uneven spacing)  
✗ Don't embed videos that auto-play with sound  
✗ Don't use outdated sliders or carousels for important content  
✗ Don't forget alt text on all images

---

## 19. RESOURCES & REFERENCES

**Color Tools:**
- Contrast checker: WebAIM Color Contrast Checker
- Palette generator: Coolors.co
- Accessibility simulator: Coblis Color Blindness Simulator

**Typography Resources:**
- Font pairing: Google Fonts pairs
- Typographic scale: Type-scale.com
- Readability: Hemingway App Editor

**Inspiration & Benchmarks:**
- Goldman Sachs: gs.com (minimalist approach)
- Morgan Stanley: morganstanley.com (professional authority)
- Bloomberg: bloomberg.com (data visualization)
- Financial Times: ft.com (editorial typography)

---

**Document Last Updated:** November 2025  
**Version:** 1.0 (Final)  
**Approval Status:** Ready for Implementation

---

*This design system serves as a comprehensive guide for building trust-focused, professionally aesthetic financial websites and documentation. The principles and specifications ensure consistency across all digital assets while maintaining accessibility and performance standards.*
