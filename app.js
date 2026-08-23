alert("app.js 起動");

/* =========================

   BOAT AI

   レースデータ

========================= */

const races = {

  "戸田 10R": {

    rating: "★★★★★",

    confidence: "★★★★★",

    mainPick: 1,

    mainPickName: "1号艇",

    hole: "4号艇",

    winRate: "48.2%",

    comment:

      "イン有利を中心に1号艇を本命評価。まずは1号艇を軸に展開を考える。",

    bets:

      "1-2-4 / 1-4-2 / 1-2-3",

    boats: [

      {

        number: 1,

        name: "選手A",

        score: 48.2

      },

      {

        number: 2,

        name: "選手B",

        score: 21.6

      },

      {

        number: 3,

        name: "選手C",

        score: 12.4

      },

      {

        number: 4,

        name: "選手D",

        score: 9.8

      },

      {

        number: 5,

        name: "選手E",

        score: 5.1

      },

      {

        number: 6,

        name: "選手F",

        score: 3.0

      }

    ]

  },

  "平和島 8R": {

    rating: "★★★★☆",

    confidence: "★★★★☆",

    mainPick: 2,

    mainPickName: "2号艇",

    hole: "3号艇",

    winRate: "34.5%",

    comment:

      "2号艇を中心に評価。展開次第では3号艇の食い込みにも注目。",

    bets:

      "2-1-3 / 2-3-1 / 1-2-3",

    boats: [

      {

        number: 1,

        name: "選手A",

        score: 48.2

      },

      {

        number: 2,

        name: "選手B",

        score: 21.6

      },

      {

        number: 3,

        name: "選手C",

        score: 12.4

      },

      {

        number: 4,

        name: "選手D",

        score: 9.8

      },

      {

        number: 5,

        name: "選手E",

        score: 5.1

      },

      {

        number: 6,

        name: "選手F",

        score: 3.0

      }

    ]

  },

  "江戸川 11R": {

    rating: "★★★☆☆",

    confidence: "★★★☆☆",

    mainPick: 2,

    mainPickName: "2号艇",

    hole: "3号艇",

    winRate: "29.1%",

    comment:

      "混戦。2号艇を軸候補として評価し、3号艇の絡みにも注目。",

    bets:

      "2-1-3 / 2-3-1 / 1-2-3",

    boats: [

      {

        number: 1,

        name: "選手A",

        score: 48.2

      },

      {

        number: 2,

        name: "選手B",

        score: 21.6

      },

      {

        number: 3,

        name: "選手C",

        score: 12.4

      },

      {

        number: 4,

        name: "選手D",

        score: 9.8

      },

      {

        number: 5,

        name: "選手E",

        score: 5.1

      },

      {

        number: 6,

        name: "選手F",

        score: 3.0

      }

    ]

  }

};

/* =========================

   今日の日付

========================= */

function showToday() {

  const todayElement =

    document.getElementById("today");

  const today = new Date();

  const year =

    today.getFullYear();

  const month =

    String(today.getMonth() + 1)

      .padStart(2, "0");

  const day =

    String(today.getDate())

      .padStart(2, "0");

  todayElement.textContent =

    `${year}/${month}/${day}`;

}

/* =========================

   レースボタン作成

========================= */

function createRaceButtons() {

  const container =

    document.getElementById("raceButtons");

  container.innerHTML = "";

  Object.keys(races).forEach(

    (raceName, index) => {

      const button =

        document.createElement("button");

      button.type = "button";

      button.className =

        "race-card";

      if (index === 0) {

        button.classList.add("active");

      }

      const parts =

        raceName.split(" ");

      const place =

        parts[0];

      const raceNumber =

        parts[1];

      button.innerHTML = `

        <span class="race-place">

          ${place}

        </span>

        <strong class="race-number">

          ${raceNumber}

        </strong>

      `;

      button.addEventListener(

        "click",

        () => {

          document

            .querySelectorAll(".race-card")

            .forEach(card => {

              card.classList.remove(

                "active"

              );

            });

          button.classList.add(

            "active"

          );

          renderRace(raceName);

        }

      );

      container.appendChild(button);

    }

  );

}

/* =========================

   レース表示

========================= */

async function loadRealData() {

  try {

    const response = await fetch(

      "https://boatraceopenapi.github.io/api/v1/today.json"

    );

    if (!response.ok) {

      throw new Error(`データ取得失敗: ${response.status}`);

    }

    const data = await response.json();

     alert("API取得成功\n" + JSON.stringify(data).slice(0, 2000));
     
    console.log("今日のレースデータ:", data);

     alert(JSON.stringify(data).slice(0, 1000));

    // APIデータが存在するか確認

    if (

      !data ||

      !data.programs ||

      !data.programs.stadiums

    ) {

      throw new Error("レースデータの形式が想定と違います");

    }

    return data;

  } catch (error) {

    console.error("レースデータを取得できません:", error);

    return null;

  }

}


function renderBoats(boats) {

    const container =

        document.getElementById("boatsList");

    if (!container) {

        console.error("boatsList が見つかりません");

        return;

    }

    container.innerHTML = "";

    boats.forEach(boat => {

        const card =

            document.createElement("div");

        card.className = "boat-card";

        card.innerHTML = `

            <div class="boat-number">

                ${boat.number}

            </div>

            <div class="boat-info">

                <div class="boat-name">

                    ${boat.name}

                </div>

                <div class="boat-score">

                    AI評価 ${boat.score}%

                </div>

            </div>

            <div class="boat-bar">

                <div

                    class="boat-bar-inner"

                    style="width:${boat.score}%">

                </div>

            </div>

        `;

        container.appendChild(card);

    });

}

/* =========================

   6艇表示

========================= */

/* =================================

   レース表示

================================= */


function renderRace(raceName, data) {

   alert(JSON.stringify(data).slice(0, 3000));
   
  console.log("renderRace:", raceName, data);

  if (!data || !data.programs || !data.programs.stadiums) {

    console.error("APIデータがありません");

    return;

  }

  // 「戸田 1R」などからレース番号を取得

  const raceNoMatch = raceName.match(/(\d+)R/);

  const raceNo = raceNoMatch ? raceNoMatch[1] : "1";

  // 戸田 = 会場番号 2

  const toda = data.programs.stadiums["3"];

  if (!toda || !toda.races) {

    console.error("戸田のレースデータがありません");

    return;

  }

  const race = toda.races[String(raceNo)];

  if (!race) {

    console.error("指定レースがありません:", raceName);

    return;

  }

  console.log("表示するレース:", race);

  // racers はオブジェクトなので配列に変換

  const racers = Object.values(race.racers || {});

  if (!racers.length) {

    console.error("選手データがありません");

    return;

  }

  const boats = racers.map(racer => ({

    number: racer.entry_number,

    name: racer.name,

    score: Math.round(

      (

        (racer.national_win_rate || 0) * 8 +

        (racer.local_win_rate || 0) * 5 +

        (racer.motor_top_2_percent || 0) * 0.2 +

        (racer.boat_top_2_percent || 0) * 0.1

      )

    )

  }));
   
// AI評価順に並べる

const ranked = [...boats].sort((a, b) => b.score - a.score);

// 本命

const main = ranked[0];

// 穴候補

const hole = ranked[2];

// 買い目候補

const second = ranked[1];

const third = ranked[2];

// 画面に反映

document.getElementById("mainPick").textContent =

  `${main.number}号艇`;

document.getElementById("mainPickName").textContent =

  main.name;

document.getElementById("hole").textContent =

  `${hole.number}号艇`;

document.getElementById("winRate").textContent =

  `${main.score}%`;

document.getElementById("comment").textContent =

  `${main.number}号艇 ${main.name}を本命評価。AI評価${main.score}%で6艇中トップ。`;

document.getElementById("bets").textContent =

  `${main.number}-${second.number}-${third.number} / ${main.number}-${third.number}-${second.number}`;
  renderBoats(boats);

}


function renderBoats(boats) {

  const container =

    document.getElementById(

      "boatsList"

    );

  container.innerHTML = "";

  boats.forEach(boat => {

    const card =

      document.createElement("div");

    card.className =

      "boat-card";

    card.innerHTML = `

      <div class="boat-number">

        ${boat.number}

      </div>

      <div class="boat-info">

        <div class="boat-name">

          ${boat.name}

        </div>

        <div class="boat-score">

          AI評価 ${boat.score}%

        </div>

      </div>

      <div class="boat-bar">

        <div

          class="boat-bar-inner"

          style="width: ${boat.score}%">

        </div>

      </div>

    `;

    container.appendChild(card);

  });

}

/* =========================

   初期化

========================= */

async function init() {

  showToday();

    // 一時的に停止

  // createRaceButtons();

  // APIから今日のレースデータを取得

  const realData = await loadRealData();

  // API取得に失敗した場合

  if (!realData) {

    console.error("レースデータを取得できませんでした");

    return;

  }

  console.log("取得成功:", realData);

  // まず戸田1Rを表示

  renderRace("戸田 1R", realData);

}

document.addEventListener("DOMContentLoaded", init);
