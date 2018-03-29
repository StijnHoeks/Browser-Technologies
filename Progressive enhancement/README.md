# Browser Technologies

## Core Functionality

Contact list based on random user API.

## Features/Browser Technologies

> HTML
Main/detail view
- Based on css :target

> CSS
Sticky header

> JS
Partially client/server-side
- Server-side: Rebuilding API array.
- Client-side: Functions, events and DOM manipulations
- Src directory served with express
- Ejs templating based on Nunjucks

Fixed vertical navigation bar
- with viewport position indicator

## Browser support

Detail view
- CSS :target acts as automatic fallback (info within the :target element will still be shown when just HTML is loaded)

Sticky header 
- CSS sticky (Edge 16, FireFox 59, Safari 11, Samsung 6.2)
- js feature detect: CSS.supports('')
- fallback: javascript scroll event (older browsers)

## Accessibility issues

- Missing alt for images (solved)
- Hover, focus states (solved)