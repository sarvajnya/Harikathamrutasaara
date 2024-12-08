var padding = { top: 20, right: 40, bottom: 20, left: 40 },
  w = 700 - padding.left - padding.right,
  h = 700 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  color = d3.scale.category20(); 
var data = [
  {
    label: "1 ಮಂಗಳಾಚರಣ ಸಂಧಿ",
    value: 1,
    question: "ಮಂಗಳಾಚರಣ ಸಂಧಿ 1 ನುಡಿ " + Math.floor(Math.random() * 13 + 1), 
    //Math.round(new Date().getTime() + '' + (Math.random() * Math.pow(10, 6)))% 55
  }, 
  {
    label: "2 ಕರುಣಾ ಸಂಧಿ",
    value: 2,
    question: "ಕರುಣಾ ಸಂಧಿ 2 ನುಡಿ " + Math.floor(Math.random() * 31 + 1),
     //Math.round(new Date().getTime() + '' + (Math.random() * Math.pow(10, 6)))% 54
  }, 
  {
    label: "3 ವ್ಯಾಪ್ತಿ ಸಂಧಿ",
    value: 3,
    question: "ವ್ಯಾಪ್ತಿ ಸಂಧಿ 3 ನುಡಿ " + Math.floor(Math.random() * 32 + 1),
  },
  {
    label: "4 ಭೋಜನ ರಸ ವಿಭಾಗ ಸಂಧಿ ",
    value: 4,
    question: "ಭೋಜನ ರಸ ವಿಭಾಗ ಸಂಧಿ 4 ನುಡಿ " + Math.floor(Math.random() * 30 + 1),
  }, 
  {
    label: "5 ವಿಭೂತಿ ಸಂಧಿ",
    value: 5,
    question: "ವಿಭೂತಿ ಸಂಧಿ 5 ನುಡಿ " + Math.floor(Math.random() * 40 + 1),
  }, 
  {
    label: "6 ಪಂಚ ಮಹಾಯಜ್ಞ ಸಂಧಿ",
    value: 6,
    question: "ಪಂಚ ಮಹಾಯಜ್ಞ ಸಂಧಿ 6 ನುಡಿ " + Math.floor(Math.random() * 35 + 1),
  }, 
  {
    label: "7 ಪಂಚತನ್ಮಾತ್ರ ಸಂಧಿ",
    value: 7,
    question: "ಪಂಚತನ್ಮಾತ್ರ ಸಂಧಿ 7 ನುಡಿ " + Math.floor(Math.random() * 33 + 1),
  }, 
  {
    label: "8 ಮಾತೃಕಾ ಸಂಧಿ",
    value: 8,
    question: "ಮಾತೃಕಾ ಸಂಧಿ 8 ನುಡಿ " + Math.floor(Math.random() * 33 + 1),
  }, 
  {
    label: "9 ವರ್ಣ ಪ್ರಕ್ರಿಯ ಸಂಧಿ",
    value: 9,
    question: "ವರ್ಣ ಪ್ರಕ್ರಿಯ ಸಂಧಿ 9 ನುಡಿ " + Math.floor(Math.random() * 31 + 1),
  }, 
  {
    label: "10 ಸರ್ವಪ್ರತೀಕ ಸಂಧಿ",
    value: 10,
    question: "ಸರ್ವಪ್ರತೀಕ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 25 + 1),
  },
  {
    label: "11 ಧ್ಯಾನಪ್ರಕ್ರಿಯ ಸಂಧಿ",
    value: 11,
    question: "ಧ್ಯಾನಪ್ರಕ್ರಿಯ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 32 + 1),
  },
  {
    label: "12 ನಾಡೀ ಪ್ರಕರಣ ಸಂಧಿ",
    value: 12,
    question: "ನಾಡೀ ಪ್ರಕರಣ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 25 + 1),
  },
  {
    label: "13 ನಾಮ ಸ್ಮರಣ ಸಂಧಿ",
    value: 13,
    question: "ನಾಮ ಸ್ಮರಣ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 33 + 1),
  },
  {
    label: "14 ಪಿತೃಗಣ ವಿಚಾರ ಸಂಧಿ ",
    value: 14,
    question: "ಪಿತೃಗಣ ವಿಚಾರ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 31 + 1),
  },
  {
    label: "15 ಶ್ವಾಸ ಸಂಧಿ",
    value: 15,
    question: "ಶ್ವಾಸ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 29 + 1),
  },
  {
    label: "16 ದತ್ತಸ್ವಾತಂತ್ರ್ಯ ಸಂಧಿ",
    value: 16,
    question: "ದತ್ತಸ್ವಾತಂತ್ರ್ಯ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 37 + 1),
  },
  {
    label: "  17 ಸ್ವಗತಸ್ವಾತಂತ್ರ್ಯ ಸಂಧಿ",
    value: 17,
    question: "ಸ್ವಗತಸ್ವಾತಂತ್ರ್ಯ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 14 + 1),
  },
  {
    label: "18 ಕ್ರೀಡಾ ವಿಲಾಸ ಸಂಧಿ",
    value: 18,
    question: "ಕ್ರೀಡಾ ವಿಲಾಸ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 40 + 1),
  },
  {
    label: "19 ಕರ್ಮ ವಿಮೋಚನ ಸಂಧಿ",
    value: 19,
    question: "ಕರ್ಮ ವಿಮೋಚನ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 35 + 1),
  },
  {
    label: "20 ಗುಣ ತಾರತಮ್ಯ ಸಂಧಿ ",
    value: 20,
    question: "ಗುಣ ತಾರತಮ್ಯ ಸಂಧಿ ನುಡಿ " + Math.floor(Math.random() * 29 + 1),
  },
  {
    label: "ಬೃಹತ್ತಾರತಮ್ಯ ಸಂಧಿ  21",
    value: 21,
    question: "ಬೃಹತ್ತಾರತಮ್ಯ ಸಂಧಿ 21 ನುಡಿ " + Math.floor(Math.random() * 57 + 1),
  },
  {
    label: "ಸಕಲ ದುರಿತ ನಿವಾರಣ ಸಂಧಿ  22",
    value: 22,
    question: "ಸಕಲ ದುರಿತ ನಿವಾರಣ ಸಂಧಿ 22 ನುಡಿ " + Math.floor(Math.random() * 33 + 1),
  },
  {
    label: "ಕಲ್ಪಸಾಧನ ಸಂಧಿ  23",
    value: 23,
    question: "ಕಲ್ಪಸಾಧನ ಸಂಧಿ 23 ನುಡಿ " + Math.floor(Math.random() * 63 + 1),
  },
  {
    label: "ಬಿಂಬಾಪರೋಕ್ಷ ಸಂಧಿ  24",
    value: 24,
    question: "ಬಿಂಬಾಪರೋಕ್ಷ ಸಂಧಿ 24 ನುಡಿ " + Math.floor(Math.random() * 31 + 1),
  },
  {
    label: "ಆರೋಹಣಾ ತಾರತಮ್ಯ ಸಂಧಿ  25",
    value: 25,
    question: "ಆರೋಹಣಾ ತಾರತಮ್ಯ ಸಂಧಿ 25 ನುಡಿ " + Math.floor(Math.random() * 19 + 1),
  },
  {
    label: "ಅವರೋಹಣ ತಾರತಮ್ಯ ಸಂಧಿ  26",
    value: 26,
    question: "ಅವರೋಹಣ ತಾರತಮ್ಯ ಸಂಧಿ 26 ನುಡಿ " + Math.floor(Math.random() * 7 + 1),
  },
  {
    label: "ಅನುಕ್ರಮಣಿಕಾ ತಾರತಮ್ಯ ಸಂಧಿ  27",
    value: 27,
    question: "ಅನುಕ್ರಮಣಿಕಾ ತಾರತಮ್ಯ ಸಂಧಿ 27 ನುಡಿ " + Math.floor(Math.random() * 5 + 1),
  },
  {
    label: "ಗಣಪತಿ ಸಂಧಿ 28",
    value: 28,
    question: "ಗಣಪತಿ ಸಂಧಿ 28 ನುಡಿ " + Math.floor(Math.random() * 21 + 1),
  },
  {
    label: "ಅಣು ತಾರತಮ್ಯ ಸಂಧಿ  29",
    value: 29,
    question: "ಅಣು ತಾರತಮ್ಯ ಸಂಧಿ 29 ನುಡಿ " + Math.floor(Math.random() * 16 + 1),
  },
  {
    label: "ದೈತ್ಯ ತಾರತಮ್ಯ ಸಂಧಿ  30",
    value: 30,
    question: "ದೈತ್ಯ ತಾರತಮ್ಯ ಸಂಧಿ 30 ನುಡಿ " + Math.floor(Math.random() * 25 + 1),
  },
  {
    label: "ನೈವೇದ್ಯ ಪ್ರಕರಣ ಸಂಧಿ  31",
    value: 31,
    question: "ನೈವೇದ್ಯ ಪ್ರಕರಣ ಸಂಧಿ 31 ನುಡಿ " + Math.floor(Math.random() * 25 + 1),
  },
  {
    label: "ಕಕ್ಷ ತಾರತಮ್ಯ ಸಂಧಿ  32",
    value: 32,
    question: "ಕಕ್ಷ ತಾರತಮ್ಯ ಸಂಧಿ 32 ನುಡಿ " + Math.floor(Math.random() * 56 + 1),
  },
  {
    label: "ಫಲಸ್ತುತಿವಿಭೂತಿ ಸಂಧಿ  33",
    value: 33,
    question: "ಫಲಸ್ತುತಿವಿಭೂತಿ ಸಂಧಿ 13 ನುಡಿ " + Math.floor(Math.random() * 24 + 1),
  },
];
var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom)
  .style("display", "block")
  .style({"font-size": "25px"})
  .style("margin", "0 auto");

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  )
  .style("font-size", "25px");
var vis = container.append("g");
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" })
  .on("mouseover", function () {
    d3.select(this).style("fill", "#ddd");
  })
  .on("mouseout", function () {
    d3.select(this).style("fill", "white");
  });

container
  .append("text")
  .attr("id", "centerText")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text('START!')
  // .text("सुमध्वविजयः")
  .style({ "font-weight": "bold", "font-size": "20px" });

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });
var arc = d3.svg.arc().outerRadius(r);
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  })
  .style("cursor", "pointer")
  .on("mouseover", function () {
    d3.select(this).style("opacity", 0.8);
  })
  .on("mouseout", function () {
    d3.select(this).style("opacity", 1);
  });
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  })
  .style({"font-size": "12px","font-weight": "bold"});

container.on("click", spin);
function spin(d) {
  container.on("click", null);

  d3.select("#centerText").text("WAIT!");
  
  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 144099 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;
  
  rotation += 90 - Math.round(ps / 2);
  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      
      d3.select("#question h1").text(data[picked].question);
      oldrotation = rotation;

      console.log(data[picked].value);

      container.on("click", spin);
      container.on("click",
        setTimeout(() => {
          location.reload();
      }, 5000)
      );
    });
}
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "black" });


function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}


