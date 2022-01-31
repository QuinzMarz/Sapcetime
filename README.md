# Spacetime

## CLI Commands
*   `npm install`: Installs dependencies

*   `npm run dev`: Run a development, HMR server

*   `npm run build`: Production-ready build

## How it works

Spacetime base utilizes earth second as the base unit for all calculations. 

| Spacetime unit | Quantity | Seconds     |
|----------------|----------|-------------|
| Second         | 1        | 1           |
| Minute         | 100      | 100         |
| Hour           | 100      | 10,000      |
| Day            | 10       | 100,000     |
| Week           | 10       | 1,000,000   |
| Month          | 10       | 10,000,000  |
| Year           | 10       | 100,000,000 |

As a begining Spacetime uses date, when first human left the Earth and went to space - 12 April 1961.

### Example

`01/01/2000 12:00AM Earth Time` = `10/03/13 95:52:00 Space Time`


## How to use

Insert below code in a place of your website where you want Calendar to be displayed: 

```html
<script async src="https://spacetime.com/index.min.js" type="text/javascript"></script>
<div id="spacetime"></div>
```
