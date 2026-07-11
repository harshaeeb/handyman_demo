# Service photos

Drop one photo per service here using the **exact filename** below (JPG or
PNG — update the extension in `src/config/site.ts`'s `image` field if you
use PNG). Recommended size: **800×600px** (4:3), landscape orientation,
under 500KB each.

Until a file exists at the matching path, that service's tile and detail
page automatically show a plain "[ photo goes here ]" placeholder instead
— see `resolveImage()` in `src/utils/resolveImage.ts`. No code changes
needed; just add the file and rebuild/redeploy.

| Service                        | Expected file                                  |
|---------------------------------|-------------------------------------------------|
| General Handyman Repairs        | `public/images/services/general-repairs.jpg`     |
| Fence & Gate Services            | `public/images/services/fence-gate-services.jpg` |
| Pressure & Power Washing         | `public/images/services/pressure-washing.jpg`    |
| Door Installation & Repair       | `public/images/services/door-window-repair.jpg`  |
| Tile Installation & Replacement  | `public/images/services/tile-installation.jpg`   |
| Appliance Installation           | `public/images/services/appliance-installation.jpg` |
| Carpentry & Deck Repair          | `public/images/services/carpentry-decks.jpg`     |

Each filename matches that service's `slug` in `src/config/site.ts` — if
you add a new service there, follow the same `<slug>.jpg` convention.
