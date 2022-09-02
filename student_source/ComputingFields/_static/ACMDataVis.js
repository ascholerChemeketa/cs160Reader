const subjects = ["CS", "CSEC", "IS", "IT", "SE", "CE"];

const colorMap = {
  CE: "rgba(186,34,52, X)",
  CS: "rgba(51,107,139, X)",
  SE: "rgba(240,181,31, X)",
  CSEC: "rgba(234,112,11, X)",
  IS: "rgba(47, 162, 54, X)",
  IT: "rgba(59, 60, 53, X)",
};

//Retrieve color for subject and set opacity based on use
function getColor(subject, border = false) {
  let color = colorMap[subject];
  let opacity = border ? 1 : 0.4;
  return color.replace("X", opacity);
}

const data = [{
  "Knowledge Area": "1.1. Social Issues and Professional Practice",
  values: {
    CE: 3.5,
    CS: 3,
    CSEC: 3,
    IS: 4,
    IT: 3,
    SE: 4,
  },
}, {
  "Knowledge Area": "1.2. Security Policy and Management",
  values: {
    CE: 2,
    CS: 2.5,
    CSEC: 4.5,
    IS: 2.5,
    IT: 3,
    SE: 3,
  },
}, {
  "Knowledge Area": "1.3. IS Management and Leadership",
  values: {
    CE: 1,
    CS: 1,
    CSEC: 1.5,
    IS: 4.5,
    IT: 1.5,
    SE: 1.5,
  },
}, {
  "Knowledge Area": "1.4. Enterprise Architecture",
  values: {
    CE: 0.5,
    CS: 0.5,
    CSEC: 1.5,
    IS: 4,
    IT: 2,
    SE: 2,
  },
}, {
  "Knowledge Area": "1.5. Project Management",
  values: {
    CE: 2,
    CS: 2.5,
    CSEC: 1.5,
    IS: 4.5,
    IT: 2.5,
    SE: 3,
  },
}, {
  "Knowledge Area": "1.6. User Experience Design",
  values: {
    CE: 2,
    CS: 3,
    CSEC: 2,
    IS: 3,
    IT: 3.5,
    SE: 4,
  },
}, {
  "Knowledge Area": "2.1. Security Issues and Principles",
  values: {
    CE: 2.5,
    CS: 2.5,
    CSEC: 4.5,
    IS: 3,
    IT: 3.5,
    SE: 3,
  },
}, {
  "Knowledge Area": "2.2. Systems Analysis & Design",
  values: {
    CE: 1.5,
    CS: 1.5,
    CSEC: 1.5,
    IS: 4.5,
    IT: 2,
    SE: 3,
  },
}, {
  "Knowledge Area": "2.3. Requirements Analysis and Specification",
  values: {
    CE: 1.5,
    CS: 1.5,
    CSEC: 1,
    IS: 3,
    IT: 2,
    SE: 4,
  },
}, {
  "Knowledge Area": "2.4. Data and Information Management",
  values: {
    CE: 1.5,
    CS: 3,
    CSEC: 2.5,
    IS: 4,
    IT: 2.5,
    SE: 3,
  },
}, {
  "Knowledge Area": "3.1. Virtual Systems and Services",
  values: {
    CE: 2,
    CS: 2,
    CSEC: 1.5,
    IS: 1.5,
    IT: 3.5,
    SE: 2,
  },
}, {
  "Knowledge Area": "3.2. Intelligent Systems (AI)",
  values: {
    CE: 2,
    CS: 4,
    CSEC: 1.5,
    IS: 1.5,
    IT: 1.5,
    SE: 0.5,
  },
}, {
  "Knowledge Area": "3.3. Internet of Things",
  values: {
    CE: 3,
    CS: 1,
    CSEC: 2,
    IS: 2,
    IT: 3,
    SE: 2,
  },
}, {
  "Knowledge Area": "3.4. Parallel and Distributed Computing",
  values: {
    CE: 3,
    CS: 3,
    CSEC: 1.5,
    IS: 2,
    IT: 2,
    SE: 2.5,
  },
}, {
  "Knowledge Area": "3.5. Computer Networks",
  values: {
    CE: 3,
    CS: 3,
    CSEC: 3,
    IS: 2,
    IT: 3.5,
    SE: 2,
  },
}, {
  "Knowledge Area": "3.6. Embedded Systems",
  values: {
    CE: 4,
    CS: 1,
    CSEC: 2,
    IS: 0.5,
    IT: 0.5,
    SE: 1.5,
  },
}, {
  "Knowledge Area": "3.7. Integrated Systems Technology",
  values: {
    CE: 1.5,
    CS: 1,
    CSEC: 1,
    IS: 2,
    IT: 3.5,
    SE: 2,
  },
}, {
  "Knowledge Area": "3.8. Platform Technologies",
  values: {
    CE: 0.5,
    CS: 1.5,
    CSEC: 1.5,
    IS: 2,
    IT: 3,
    SE: 1,
  },
}, {
  "Knowledge Area": "3.9. Security Technology and Implementation",
  values: {
    CE: 2.5,
    CS: 3,
    CSEC: 4.5,
    IS: 2,
    IT: 3,
    SE: 3,
  },
}, {
  "Knowledge Area": "4.1. Software Quality, Verification and Validation",
  values: {
    CE: 2,
    CS: 2,
    CSEC: 1.5,
    IS: 2,
    IT: 1.5,
    SE: 4,
  },
}, {
  "Knowledge Area": "4.2. Software Process",
  values: {
    CE: 1.5,
    CS: 2,
    CSEC: 1,
    IS: 2,
    IT: 2,
    SE: 4,
  },
}, {
  "Knowledge Area": "4.3. Software Modeling and Analysis",
  values: {
    CE: 2,
    CS: 2,
    CSEC: 1.5,
    IS: 3,
    IT: 2,
    SE: 4.5,
  },
}, {
  "Knowledge Area": "4.4. Software Design",
  values: {
    CE: 3,
    CS: 3,
    CSEC: 2,
    IS: 2,
    IT: 1.5,
    SE: 4.5,
  },
}, {
  "Knowledge Area": "4.5. Platform-Based Development",
  values: {
    CE: 1,
    CS: 3,
    CSEC: 0.5,
    IS: 2,
    IT: 3,
    SE: 2,
  },
}, {
  "Knowledge Area": "5.1. Graphics and Visualization",
  values: {
    CE: 1.5,
    CS: 3,
    CSEC: 0.5,
    IS: 1,
    IT: 0.5,
    SE: 1,
  },
}, {
  "Knowledge Area": "5.2. Operating Systems",
  values: {
    CE: 3,
    CS: 4,
    CSEC: 2.5,
    IS: 1.5,
    IT: 2,
    SE: 2,
  },
}, {
  "Knowledge Area": "5.3. Data Structures, Algorithms and Complexity",
  values: {
    CE: 3,
    CS: 4.5,
    CSEC: 2,
    IS: 2,
    IT: 1.5,
    SE: 3,
  },
}, {
  "Knowledge Area": "5.4. Programming Languages",
  values: {
    CE: 2.5,
    CS: 4,
    CSEC: 1.5,
    IS: 1.5,
    IT: 1.5,
    SE: 2.5,
  },
}, {
  "Knowledge Area": "5.5. Programming Fundamentals",
  values: {
    CE: 3,
    CS: 4.5,
    CSEC: 2.5,
    IS: 2,
    IT: 3,
    SE: 4,
  },
}, {
  "Knowledge Area": "5.6. Computing Systems Fundamentals",
  values: {
    CE: 2.5,
    CS: 2.5,
    CSEC: 1.5,
    IS: 2.5,
    IT: 2,
    SE: 2.5,
  },
}, {
  "Knowledge Area": "6.1. Architecture and Organization",
  values: {
    CE: 4.5,
    CS: 3.5,
    CSEC: 2,
    IS: 1.5,
    IT: 1.5,
    SE: 2,
  },
}, {
  "Knowledge Area": "6.2. Digital Design",
  values: {
    CE: 4.5,
    CS: 1.5,
    CSEC: 1,
    IS: 0.5,
    IT: 0.5,
    SE: 1,
  },
}, {
  "Knowledge Area": "6.3. Circuits and Electronics",
  values: {
    CE: 4.5,
    CS: 1.5,
    CSEC: 0.5,
    IS: 0.5,
    IT: 1.5,
    SE: 0.5,
  },
}, {
  "Knowledge Area": "6.4. Signal Processing",
  values: {
    CE: 3.5,
    CS: 0.5,
    CSEC: 1,
    IS: 0.5,
    IT: 0.5,
    SE: 0.5,
  },
}, ];

//Make 4.5's into 5s on startup
function scoreFilter(score) {
  return score == 4.5 ? 5 : score;
}
data.forEach((d) => {
  for (let [key, value] of Object.entries(d["values"])) {
    d["values"][key] = scoreFilter(d["values"][key]);
  }
});

//Filter helper - identifies objects that have specified minValue for key
function hasValueAtLeast(object, keyList, minValue) {
  for (let k of keyList) {
    if (object[k] >= minValue) return true;
  }
  return false;
}

//Identifies active subjects from chart
function getActiveSubjects(chart) {
  var curSubjects = [];
  chart.data.datasets.forEach(function(ds) {
    if (!ds.hidden)
      curSubjects.push(ds.label);
  });
  return curSubjects;
}

//Select data to display and redraw
function rebuildChart(chart, activeSubjects) {
  //Show everything rated 3+ for any item
  //But, always show at least 6 domains
  let filteredData = [];
  let viewThreshold = 3;
  while (filteredData.length < 6) {
    filteredData = data.filter((d) =>
      hasValueAtLeast(d.values, activeSubjects, viewThreshold)
    );
    viewThreshold -= 0.5;
  }

  let dataSetList = [];
  for (let s of subjects) {
    let ds = {};
    ds["label"] = s;
    ds["data"] = filteredData.map((d) => d["values"][s]);
    ds["backgroundColor"] = getColor(s);
    ds["borderColor"] = getColor(s, true);
    ds["hidden"] = activeSubjects.indexOf(s) == -1 ? true : false;
    dataSetList.push(ds);
  }

  let filteredLabels = filteredData.map((d) =>
    d["Knowledge Area"].slice(5)
  ); //trim numbers at start of titles

  chart.data.labels = filteredLabels;
  chart.data.datasets = dataSetList;
  chart.update();
}

//
function clickHandler(evt) {
  const points = myChart.getElementsAtEventForMode(
    evt,
    "nearest", {
      intersect: true
    },
    true
  );

  if (points.length) {
    const firstPoint = points[0];
    var label = myChart.data.labels[firstPoint.index];
    var value =
      myChart.data.datasets[firstPoint.datasetIndex].data[
        firstPoint.index
      ];
  }
}

const cfg = {
  type: "radar",
  options: {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 5,
        pointLabels: {
          font: {
            size: 12,
          },
          padding: 2
        },
        ticks: {
          font: {
            size: 24
          }
        }
      }
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        // padding: 10,
        title: {
          display: true,
          text: " ",
          font: {
            size: 24
          },
          padding: {
            top: 5
          }
        },
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 24
          },
        },
        onClick: function(e, legendItem) {
          var ci = this.chart;
          var index = legendItem.datasetIndex;

          let activeSubjects = getActiveSubjects(ci);

          //Don't allow unselecting the only thing
          if (activeSubjects.length > 1 || ci.data.datasets[index].hidden) {
            ci.data.datasets[index].hidden = !ci.data.datasets[index].hidden;
            rebuildChart(ci, getActiveSubjects(ci));
          }
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {},
};

Chart.defaults.font.family = "Roboto";

function makeChart(canvasID, initialDisciplines) {
  console.log(canvasID);
  console.log(document.getElementById(canvasID));
  var ctx = document.getElementById(canvasID).getContext("2d");
  var chart = new Chart(ctx, cfg);
  rebuildChart(chart, initialDisciplines);
}