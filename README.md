## React + Parcel Boilerplate

I've created a simple basic boilerplate for react using parcel bundler.

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
  - go to `milligram.min.css` in your package
  - replace `#9b4dca` to `var(--primary-color, #fallbackColor)`
  - go back to your project's stylesheet and declare your color
  ```css
  :root {
    --primary-color: #somecolor;
  }
  ```

* When having unknown Parcel errors
* Make sure to delete existing cache using `npm run clear-cache` script.
