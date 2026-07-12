# Portfolio / gallery photos

The `/gallery` page renders one card per entry in `site.gallery`
(`src/config/site.ts`) — image + label, in the order listed. To grow the
portfolio:

1. Add an entry to the `gallery` array in `site.ts`:
   ```ts
   { image: "/images/gallery/<your-filename>.jpg", label: "Your Project Label" }
   ```
2. Drop the matching photo in this folder with that exact filename.

That's it — no component changes needed. Until a file exists at the
path you set, that entry's card shows a plain "[ photo goes here ]"
placeholder instead of a broken image, so it's safe to write entries
ahead of having the photo in hand.

**Image size — don't worry about cropping.** The carousel cards use a
fixed landscape shape (`object-cover`), which automatically crops and
fills whatever you upload — portrait phone photos, square shots,
whatever. You do not need to pre-crop anything.

The only number that matters is a **minimum width of 800px**. Since the
cards are wider than they are tall, width is the dimension that limits
quality — a photo narrower than that gets stretched to fill the card and
looks blurry. Height has no minimum; a tall/portrait photo just gets
cropped down to fit. (Other image slots in this template — `Hero`,
`about`, `services` — are also landscape, so the same "800px min width,
any height" rule applies to those too.)

Keep individual files under ~1–2MB so the page stays fast to load —
that's a file-size cap, unrelated to pixel dimensions.

**Labels:** keep them short (a few words) — they're overlaid directly on
the photo, not a full description. If a project needs more context, add
a matching entry to `src/config/site.ts`'s `services` array and link to
it instead.
