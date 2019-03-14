## React + Parcel Boilerplate

I've created a simple basic boilerplate for react.

- React
- Parcel for bundler
- Reach/Router
- ESLint
- Prettier
- SASS
- Milligram css

---

**tips**

- To change Milligram's primary color
  1. go to `milligram.min.css`
  2. replace `#9b4dca` to `var(--primary-color, #fallbackColor)`
  3. go back to your project's stylesheet and declare your color
  ```css
  :root {
    --primary-color: #somecolor;
  }
  ```
