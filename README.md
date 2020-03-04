# tsb-wahlbezirke

This project is a work in progress prototype. The goal of this prototype is to facilitate the management of election districts.

Add a ```.env``` file with your mapbox token and style credentials in the root directory.

```
REACT_APP_MAP_TOKEN={{MAPBOX_TOKEN}}
REACT_APP_MAP_STYLE={{MAPBOX_STYLE_URL}}
NODE_PATH=src/
```

### Planned features:
- [ ] Transfer *Wahlblöcke* between direct *Wahlbezirke* neighbours (via Dropdown)
- [ ] Recalculate *Wahlbezirke* shapes.
- [ ] Colorcoding of population / *Wahlblock*
- [ ] Comment function for *Wahlbezirke* and *Wahlblöcke*
- [ ] Tooltip distincs between *Wahlbezirke* and *Wahlblöcke* and hows correct content

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.