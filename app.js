const races = {

  "戸田 10R": {

    probs: [48.2, 17.6, 13.9, 9.8, 6.1, 4.4],

    rating: "★★★★★",

    confidence: "★★★★★",

    mainPick: "1号艇",

    hole: "4号艇",

    comment: "イン有利を中心に1号艇を本命。相手筆頭は2号艇。展開次第で4号艇の浮上に注意。",

    bets: "1-2-4 / 1-4-2 / 1-2-3"

  },

  "平和島 8R": {

    probs: [34.5, 20.1, 17.3, 12.4, 9.0, 6.7],

    rating: "★★★★☆",

    confidence: "★★★★☆",

    mainPick: "1号艇",

    hole: "3号艇",

    comment: "1号艇を軸に評価。2号艇と3号艇の連下争いに注目。",

    bets: "1-2-3 / 1-3-2 / 2-1-3"

  },

  "江戸川 11R": {

    probs: [29.1, 23.8, 18.2, 13.5, 8.7, 6.7],

    rating: "★★★☆☆",

    confidence: "★★★☆☆",

    mainPick: "1号艇",

    hole: "2号艇",

    comment: "混戦。1号艇中心だが2号艇の差し展開には警戒。",

    bets: "1-2-3 / 2-1-3 / 1-3-2"

  }

};

function setText(id, value) {

  const el = document.getElementById(id);

  if (el) el.textContent = value;

}

function render(name) {

  const r = races[name];

  if (!r) return;

  setText("rating", r.rating);

  setText("hole", r.hole);

  setText("mainPick", r.mainPick);

  setText("confidence", "AI信頼度 " + r.confidence);

  setText("comment", r.comment);

  setText("bets", r.bets);

  const probability = document.getElementById("probability");

  if (probability) {

    probability.innerHTML = "";

    r.probs.forEach((value, index) => {

      const row = document.createElement("div");

      row.className = "prob-row";

      row.innerHTML = `

        <div class="prob-label">

          ${index + 1}号艇

        </div>

        <div class="prob-bar">

          <div class="prob-fill" style="width:${value}%"></div>

        </div>

        <div class="prob-value">

          ${value}%

        </div>

      `;

      probability.appendChild(row);

    });

  }

}

document.addEventListener("DOMContentLoaded", () => {

  render("戸田 10R");

  document.querySelectorAll(".race-card").forEach(card => {

    card.addEventListener("click", () => {

      const name = card.dataset.race;

      if (name && races[name]) {

        render(name);

        document.querySelectorAll(".race-card")

          .forEach(c => c.classList.remove("active"));

        card.classList.add("active");

      }

    });

  });

});
