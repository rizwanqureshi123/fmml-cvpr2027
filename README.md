# FMML — CVPR 2027 workshop website

A responsive, dependency-free static site inspired by the **structure** (not copied code or imagery) of the Med-Reasoner NeurIPS 2026 workshop site.

## Files
- `index.html`: page content, links, program, and dates
- `styles.css`: all responsive styling
- `script.js`: mobile navigation and editable proposed organizer cards

## Preview locally
Double-click `index.html` in your browser. Alternatively, from this folder run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Publish with GitHub Pages
1. Create a public GitHub repository, e.g. `fmml-cvpr2027`.
2. Upload `index.html`, `styles.css`, `script.js` to the repository root.
3. Go to **Settings → Pages** and choose **Deploy from a branch → main → / (root)**.
4. The site will appear at `https://YOUR-USERNAME.github.io/fmml-cvpr2027/` after GitHub processes the deployment.
5. To edit, change text in `index.html` or organizer data in `script.js`, then commit/push.

## Before public launch
- **This is a proposed workshop, not yet CVPR-approved.** Change the site status only after official acceptance.
- Confirm organizing committee membership, titles, affiliations, contact persons, and speaker permissions.
- Add confirmed/tentatively confirmed speaker biographies and approved photos only after permission.
- Add submission URL, author instructions, actual review dates, proceedings decision, approved awards/sponsors, and confirmed program details.
- Add an authorized contact email. Do not use the CVPR program chairs email as the workshop's own contact address.
- Do not publish a Zoom link. Do not publish restricted patient or embryo data.
- CVPR 2027 workshop proposal deadline: November 4, 2026; workshop days: June 20–21, 2027. Specific FMML workshop date TBD.

## Customize colors
In `styles.css`, edit `:root` values such as `--navy`, `--teal`, `--aqua`, and `--rose`.

## Attributions
Content adapted from the FMML workshop planning discussion. Design is original. No third-party imagery or brand logos are bundled.
