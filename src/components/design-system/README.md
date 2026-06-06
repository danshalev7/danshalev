# The Architectural Compute Design System (v3-Astro)

This design system establishes the visual and structural architecture for the shalevdan.com website. It translates a high-performance engineering aesthetic into reusable, static-first Astro components.

## Core Principles

1. **The Linear Monolith** - The interface acts as a physical, dark, computing block. No visual ornamentation, glowing drop shadows, or decorative background gradients.

2. **No-Line Layout Isolation** - Never use `border-t` or `divide-y` to separate sections. Stack distinct background colors (`bg-surface-low`, `bg-surface-lowest`) to mark boundaries.

3. **Complementary Intersections** - Linear gradients are limited to structural asset files and layout transition clips where primary interactive layers interface.

## Color Tokens

| Token              | Hex       | Purpose                                     |
| ------------------ | --------- | ------------------------------------------- |
| `surface`          | `#000000` | Pure base backdrop canvas                   |
| `surface-low`      | `#0D0D11` | Sectioning backdrop panels                  |
| `surface-lowest`   | `#14141A` | Component card blocks                       |
| `flat-cobalt`      | `#0066FF` | Primary interaction, steady command states  |
| `flat-cyan`        | `#00F2B6` | Forward updates, active highlights, success |
| `flat-gray`        | `#DCDCDC` | Non-colored raw utility glyph logic         |
| `on-surface`       | `#FFFFFF` | Primary text                                |
| `on-surface-muted` | `#8A8A8F` | Secondary/muted text                        |

## Typography

- **Font**: Inter
- **Primary Headers**: `text-5xl font-black tracking-tighter uppercase`
- **Metadata Labels**: `text-[11px] font-bold tracking-[0.18em] uppercase`

## Components

- **ButtonFlat.astro** - Primary/secondary buttons with flat color hulls
- **GlyphNext.astro** - Cobalt-to-Cyan gradient bridge SVG indicator
- **TerminalInput.astro** - Dark terminal-style form inputs

## Rules

### Do

- Keep 95% of all components completely flat and solid
- Use background colors (`bg-surface-low` on `bg-surface`) for layout isolation
- Use linear gradients exclusively inside architectural asset shapes

### Don't

- Apply `bg-gradient-to-r` to page backdrops, hero headers, buttons, or cards
- Inject glassmorphism, blurs (`backdrop-blur`), or outer box glows
- Break layout isolation with generic line components

## Transitions

All transitions use: `transition-colors duration-100 ease-snap`
Where `ease-snap` = `cubic-bezier(0.16, 1, 0.3, 1)`
