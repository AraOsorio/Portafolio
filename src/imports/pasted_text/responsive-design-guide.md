RESPONSIVE REPAIR — DO NOT CHANGE THE DESIGN

The desktop version is now approved. The project section and visual identity are working well.

Now I need you to fix ONLY the responsive behavior of the existing website.

IMPORTANT:
Do not redesign the website.
Do not change the visual identity.
Do not change the color palette.
Do not change the typography.
Do not change the project layouts or content.
Do not change the desktop design.

The desktop version must remain visually identical.

The goal is to create a properly responsive mobile and tablet implementation of the existing design.

RESPONSIVE BREAKPOINTS

Optimize and test the website at:

1440px — Desktop
1200px — Large tablet / small desktop
1024px — Tablet landscape
768px — Tablet
430px — Mobile
390px — Mobile
375px — Small mobile

LAYOUT PRINCIPLE

Do not scale the desktop layout proportionally.

Recompose each section at smaller widths.

Every section must adapt its layout, spacing, typography and positioning according to the viewport.

The website must never produce horizontal scrolling.

Use responsive layout techniques instead of fixed desktop positioning.

CONTAINER SYSTEM

Desktop:
max-width: 1280px
horizontal padding: 80px

Tablet:
horizontal padding: 40px

Mobile:
horizontal padding: 20px

Small mobile:
horizontal padding: 16px

All main content must remain inside the viewport.

Use:

width: 100%
max-width: 100%
box-sizing: border-box

Avoid fixed widths on content containers.

NAVIGATION

Desktop:

ARA.OSORIO
WORK
ABOUT
EXPERIENCE
CONTACT

Tablet:
Allow the navigation to adapt naturally.

Mobile:
Keep ARA.OSORIO visible.

Replace the horizontal navigation links with a compact menu button.

The menu button must have a minimum touch target of approximately 44px × 44px.

The navigation must never overflow horizontally.

HERO — MOBILE

Create a dedicated mobile composition.

Do not simply shrink the desktop Hero.

The hierarchy should be:

BASED IN CHILE · 2026

ARACELLI
OSORIO

UX/UI DESIGNER

Supporting text

VIEW MY WORK →

On mobile:

- ARACELLI OSORIO must fit completely inside the viewport
- use responsive typography
- reduce the heading size substantially
- allow natural line wrapping
- maintain strong visual impact
- keep comfortable horizontal margins
- stack supporting content vertically
- keep the CTA fully visible
- prevent decorative elements from overlapping text

The main heading must never extend beyond the viewport.

Do not use fixed pixel positioning for essential Hero content.

Decorative elements may be positioned independently, but they must remain inside the viewport and must never cover important text.

PROJECTS — MOBILE

The Selected Work section is the most important part of the portfolio.

Preserve its visual prominence.

On desktop:
Keep the existing large editorial project compositions exactly as they are.

On tablet:
Recompose the project layouts when necessary.

On mobile:
Each project must become a single vertical composition.

Order:

PROJECT NUMBER
PROJECT TITLE
TAGS
PROJECT IMAGE / VISUAL
DESCRIPTION
VIEW CASE STUDY →

Each project should occupy the full available content width.

Do not place two projects side by side on mobile.

Do not shrink project visuals excessively.

Project visuals should remain large and visually dominant.

PROJECT IMAGES

All project images and visual containers must use responsive sizing.

Use:

width: 100%
max-width: 100%
height: auto

or responsive aspect-ratio containers where appropriate.

Never allow an image or visual container to exceed the width of its parent container.

Do not use fixed desktop widths.

ABOUT

Desktop can remain multi-column.

Tablet may reduce the number of columns.

Mobile must use a single-column layout.

Large typography must scale down responsively.

Text must remain readable.

SKILLS

Desktop:
Maintain the current editorial composition.

Tablet:
Allow elements to wrap.

Mobile:
Use a flexible wrapping layout or vertical editorial arrangement.

No skill item should overflow the viewport.

EXPERIENCE

Desktop:
Maintain the current layout.

Mobile:
Convert to a single-column vertical layout.

Do not use horizontal timelines on mobile.

CONTACT

Maintain the current visual identity.

On mobile:

- stack contact information
- allow links to wrap
- scale down the main headline
- maintain sufficient spacing
- ensure every link is easy to tap

DECORATIVE ELEMENTS

Keep the Neo-Brutalist decorative shapes.

Do not remove them entirely.

On smaller screens:

- reduce their size
- reposition them
- reduce their quantity only if necessary
- keep them behind or beside content
- prevent them from creating overflow
- never allow them to cover text or buttons

IMPORTANT TECHNICAL REQUIREMENTS

Audit the entire implementation for:

- fixed widths
- fixed heights
- absolute positioning
- negative margins
- oversized typography
- elements positioned outside containers
- images exceeding their parent width
- horizontal overflow
- desktop-only spacing
- components that do not adapt to viewport width

Replace problematic fixed dimensions with responsive values where appropriate.

Use responsive CSS techniques such as:

clamp()
min()
max()
flexbox
CSS grid
auto-fit
auto-fill
relative units
percentage widths
max-width
responsive gaps
media queries

Use absolute positioning ONLY for decorative elements, never for essential content.

Do not solve overflow by simply adding overflow-x: hidden.

Fix the actual layout causing the overflow.

TESTING

After implementing the responsive fixes, verify the entire website at:

1440px
1200px
1024px
768px
430px
390px
375px

At every width verify:

1. No horizontal scrolling.
2. No content is cut off.
3. No text overlaps.
4. No buttons are cut off.
5. No images exceed their containers.
6. Navigation remains usable.
7. Project layouts remain visually strong.
8. Decorative elements do not cover content.
9. Typography remains readable.
10. All sections maintain intentional spacing.

FINAL REQUIREMENT

The desktop version is already approved.

Treat the desktop design as the source of truth.

Only modify responsive behavior below the desktop breakpoint.

Do not alter the approved desktop appearance.

The mobile version should feel intentionally designed for mobile while preserving the exact same visual identity and art direction.