const races = {

  "戸田 10R": {

    rating: "★★★★★",

    confidence: "★★★★★",

    mainPick: "1号艇",

    hole: "4号艇",

    comment: "イン有利を中心に1号艇を本命。相手筆頭は2号艇。展開次第で4号艇の浮上に注意。",

    bets: "1-2-4 / 1-4-2 / 1-2-3",

    probs: [48.2, 17.6, 13.9, 9.8, 6.1, 4.4]

  },

  "平和島 8R": {

    rating: "★★★★☆",

    confidence: "★★★★☆",

    mainPick: "2号艇",

    hole: "3号艇",

    comment: "平和島8Rは2号艇を中心に評価。1号艇との組み合わせを本線に、3号艇の食い込みにも注意。",

    bets: "2-1-3 / 2-3-1 / 1-2-3",

    probs: [34.5, 20.1, 17.3, 12.4, 9.0, 6.7]

  },

  "江戸川 11R": {

    rating: "★★★☆☆",

    confidence: "★★★☆☆",

    mainPick: "2号艇",

    hole: "3号艇",

    comment: "江戸川11Rは混戦。2号艇を軸候補として評価し、3号艇の展開待ちにも警戒。",

    bets: "2-1-3 / 2-3-1 / 1-2-3",

    probs: [29.1, 23.8, 18.2, 13.5, 8.7, 6.7]

  }

};

function setText(id, text) {

  const element = document.getElementById(id);

  if (element) {

    element.textContent = text;

  }

}

function renderRace(name) {

  const race = races[name];

  if (!race) return;
  
  setText("raceName", name);
  setText("rating", race.rating);

  setText("hole", race.hole);

  setText("mainPick", race.mainPick);

  setText("confidence", "AI信頼度 " + race.confidence);

  setText("comment", race.comment);

  setText("bets", race.bets);

  const probability = document.getElementById("probability");

  if (probability) {

    probability.innerHTML = "";

    race.probs.forEach((value, index) => {

      const row = document.createElement("div");

      row.className = "prob-row";

      row.innerHTML = `

        <div class="prob-label">${index + 1}号艇</div>

        <div class="prob-bar">

          <div class="prob-fill" style="width:${value}%"></div>

        </div>

        <div class="prob-value">${value}%</div>

      `;

      probability.appendChild(row);

    });

  }

  document.addEventListener("DOMContentLoaded", () => {

  // ==============================
// レースボタンのクリック処理
// ==============================

document.querySelectorAll(".race-card").forEach(card => {

  card.addEventListener("click", function () {

    // data-raceからレース名を取得
    let raceName = this.dataset.race;

    // data-raceが取得できない場合は、
    // ボタン内の文字からレース名を判定
    if (!raceName) {
      const text = this.innerText;

      if (text.includes("戸田") && text.includes("10R")) {
        raceName = "戸田 10R";
      } else if (text.includes("平和島") && text.includes("8R")) {
        raceName = "平和島 8R";
      } else if (text.includes("江戸川") && text.includes("11R")) {
        raceName = "江戸川 11R";
      }
    }

    console.log("クリックされたレース:", raceName);

    // レース名が取得できなかった場合
    if (!raceName) {
      console.error("レース名を取得できませんでした");
      return;
    }

    // ==============================
    // 選択状態を変更
    // ==============================

    document.querySelectorAll(".race-card").forEach(c => {
      c.classList.remove("active");
    });

    this.classList.add("active");

    // ==============================
    // レース内容を表示
    // ==============================

    renderRace(raceName);
  });

});
```

  

   


    



function detectRaceFromCard(card) {

  const text = card.innerText || "";

  if (text.includes("戸田") && text.includes("10R")) {

    return "戸田 10R";

  }

  if (text.includes("平和島") && text.includes("8R")) {

    return "平和島 8R";

  }

  if (text.includes("江戸川") && text.includes("11R")) {

    return "江戸川 11R";

  }

  return null;

}

document.addEventListener("DOMContentLoaded", () => {

  // 初期表示

  renderRace("戸田 10R");

  // レースカードをタップしたとき

  document.addEventListener("click", (event) => {

    const card = event.target.closest(".race-card");

if (!card) return;

const raceName = card.getAttribute("data-race-name") || detectRaceFromCard(card);

if (!raceName) return;

    console.log("選択されたレース:", raceName);

    // 注目レースを変更

    renderRace(raceName);

    // activeを全部解除

    document.querySelectorAll(".race-card").forEach((c) => {

      c.classList.remove("active");

    });

    // タップしたカードだけactive

    card.classList.add("active");

    // 注目レースまで移動

    const panel = document.querySelector(".panel");

    if (panel) {

      panel.scrollIntoView({

        behavior: "smooth",

        block: "start"

      });

    }

  });

});

   
