# Observable + create-react-app

A first and successful attempt at bringing CoinDesk's scrubber-run [bubble-choropleth map](https://observablehq.com/@coindesk-research/localbitcoins-paxful-activity-map) into a React app, based on Mike Bostock's [tutorial](https://github.com/observablehq/react-zoomable-sunburst).

Note that I had to store both **files attached to the original notebook** and **files attached to notebooks whose resources are required by the original** in the `public` folder. (An example for the second type is *AAPL.csv* from [Line Chart with Tooltip](https://observablehq.com/@d3/line-chart-with-tooltip), whose `callout` cell was imported to create the map's tooltip.)