const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#art-web")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .style("width", "100%")
  .style("height", "auto");

const g = svg.append("g");

const data = {
  nodes: [
    { id: "Painting", group: 1 },
    { id: "Music", group: 1 },
    { id: "Dance", group: 1 },
    { id: "Film", group: 2 },
    { id: "Digital Art", group: 2 },
    { id: "Game Design", group: 3 },
    { id: "Interactive Media", group: 3 },
    { id: "Photography", group: 1 },
    { id: "Typography", group: 2 },
    { id: "Mixed Media", group: 3 },
  ],
  links: [
    { source: "Painting", target: "Digital Art" },
    { source: "Music", target: "Film" },
    { source: "Dance", target: "Film" },
    { source: "Film", target: "Game Design" },
    { source: "Game Design", target: "Interactive Media" },
    { source: "Digital Art", target: "Interactive Media" },
    { source: "Photography", target: "Mixed Media" },
    { source: "Typography", target: "Mixed Media" },
    { source: "Painting", target: "Mixed Media" },
  ]
};

const color = d3.scaleOrdinal(d3.schemeCategory10);

const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(150))
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = g.append("g")
  .attr("stroke", "#aaa")
  .attr("stroke-width", 2)
  .selectAll("line")
  .data(data.links)
  .join("line");

const node = g.append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(data.nodes)
  .join("circle")
  .attr("r", 20)
  .attr("fill", d => color(d.group))
  .on("mouseover", function () {
    d3.select(this).transition().duration(200).attr("r", 30);
  })
  .on("mouseout", function () {
    d3.select(this).transition().duration(200).attr("r", 20);
  })
  .call(drag(simulation));

const labels = g.append("g")
  .selectAll("text")
  .data(data.nodes)
  .join("text")
  .attr("text-anchor", "middle")
  .attr("dy", ".35em")
  .attr("fill", "#fff")
  .style("pointer-events", "none")
  .style("font-size", "14px")
  .text(d => d.id);

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  labels
    .attr("x", d => d.x)
    .attr("y", d => d.y);
});

function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}
