# Six Smooth UI Details — Motion Lab

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-smooth-ui-details/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable implementation based on the uploaded 51.3-second video, **“More smooth details, in slow-mo.”**

## Six source-derived motion ideas

1. **Show where it went — Arc to cart**
   - Product travels along a curved path into the cart.
   - Video callout: `ARC · 500 ms · BADGE +1`.
2. **Morph, don't swap — Submit**
   - Send button morphs into a circular loading state, then a success check.
   - Video callout: `260 × 64 px · 270 ms`.
3. **Cascade, don't dump — List load**
   - Four list rows enter with a stagger.
   - Video callout: `4 ROWS · 70 ms APART`.
4. **Follow, then fling — Swipe away**
   - Card follows with a tilt, then flicks away.
   - Video callout: `TILTS 12° · FLICKS OFF`.
5. **Flip with depth — Card flip**
   - 3D flip between Spanish “Hola” and English “Hello”.
   - Video callout: `180° · LIFTS 8% MID-FLIP`.
6. **Swing, then settle — Notification**
   - Bell swings back and forth with diminishing angles.
   - Video callout: `±24° · SETTLES IN 760 ms`.

## Run locally

No dependencies or build step required:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — layout and six interactive demo scenes
- `styles.css` — visual design and motion effects
- `app.js` — scene navigation, replay, and interactions

## Accuracy note
The video is a visual motion-design walkthrough, not a complete source-code listing. This project recreates the six visible interaction concepts and their on-screen labels as working HTML/CSS/JavaScript demos. It is not the original creator's source code. Timing and easing in the implementation are illustrative approximations of the video callouts; the scenes are local simulations with no backend or external service.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
