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

const races = {

    "戸田 1R": {

        rating: "A",

        mainPick: "1号艇",

        mainPickName: "本命選手",

        hole: "4号艇",

        winRate: "62%",

        comment: "イン有利。1号艇を軸に展開を評価。",

        bets: "1-2-4 / 1-4-2",

        boats: [

            { number: 1, name: "選手A", score: 82 },

            { number: 2, name: "選手B", score: 68 },

            { number: 3, name: "選手C", score: 61 },

            { number: 4, name: "選手D", score: 74 },

            { number: 5, name: "選手E", score: 55 },

            { number: 6, name: "選手F", score: 48 }

        ]

    },

    "戸田 2R": {

        rating: "B+",

        mainPick: "2号艇",

        mainPickName: "選手B",

        hole: "5号艇",

        winRate: "48%",

        comment: "2号艇を中心に評価。5号艇の展開にも注目。",

        bets: "2-1-5 / 2-5-1",

        boats: [

            { number: 1, name: "選手A", score: 70 },

            { number: 2, name: "選手B", score: 81 },

            { number: 3, name: "選手C", score: 59 },

            { number: 4, name: "選手D", score: 63 },

            { number: 5, name: "選手E", score: 72 },

            { number: 6, name: "選手F", score: 46 }

        ]

    },

    "戸田 3R": {

        rating: "A-",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "3号艇",

        winRate: "57%",

        comment: "1号艇を本線評価。3号艇の差しにも注意。",

        bets: "1-3-2 / 1-2-3",

        boats: [

            { number: 1, name: "選手A", score: 84 },

            { number: 2, name: "選手B", score: 69 },

            { number: 3, name: "選手C", score: 76 },

            { number: 4, name: "選手D", score: 58 },

            { number: 5, name: "選手E", score: 51 },

            { number: 6, name: "選手F", score: 43 }

        ]

    },

    "戸田 4R": {

        rating: "B",

        mainPick: "3号艇",

        mainPickName: "選手C",

        hole: "6号艇",

        winRate: "43%",

        comment: "センター勢を重視。3号艇の攻めに期待。",

        bets: "3-1-4 / 3-4-1",

        boats: [

            { number: 1, name: "選手A", score: 66 },

            { number: 2, name: "選手B", score: 60 },

            { number: 3, name: "選手C", score: 83 },

            { number: 4, name: "選手D", score: 71 },

            { number: 5, name: "選手E", score: 54 },

            { number: 6, name: "選手F", score: 49 }

        ]

    },

    "戸田 5R": {

        rating: "A",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "4号艇",

        winRate: "65%",

        comment: "1号艇中心。相手候補は4号艇を上位評価。",

        bets: "1-4-2 / 1-2-4",

        boats: [

            { number: 1, name: "選手A", score: 88 },

            { number: 2, name: "選手B", score: 67 },

            { number: 3, name: "選手C", score: 58 },

            { number: 4, name: "選手D", score: 77 },

            { number: 5, name: "選手E", score: 52 },

            { number: 6, name: "選手F", score: 44 }

        ]

    },

    "戸田 6R": {

        rating: "B+",

        mainPick: "2号艇",

        mainPickName: "選手B",

        hole: "4号艇",

        winRate: "51%",

        comment: "2号艇を軸に評価。4号艇の連対にも期待。",

        bets: "2-4-1 / 2-1-4",

        boats: [

            { number: 1, name: "選手A", score: 72 },

            { number: 2, name: "選手B", score: 84 },

            { number: 3, name: "選手C", score: 57 },

            { number: 4, name: "選手D", score: 75 },

            { number: 5, name: "選手E", score: 53 },

            { number: 6, name: "選手F", score: 45 }

        ]

    },

    "戸田 7R": {

        rating: "A-",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "5号艇",

        winRate: "59%",

        comment: "1号艇を中心視。5号艇の展開が穴候補。",

        bets: "1-2-5 / 1-5-2",

        boats: [

            { number: 1, name: "選手A", score: 86 },

            { number: 2, name: "選手B", score: 73 },

            { number: 3, name: "選手C", score: 60 },

            { number: 4, name: "選手D", score: 56 },

            { number: 5, name: "選手E", score: 71 },

            { number: 6, name: "選手F", score: 47 }

        ]

    },

    "戸田 8R": {

        rating: "B",

        mainPick: "4号艇",

        mainPickName: "選手D",

        hole: "2号艇",

        winRate: "46%",

        comment: "4号艇の攻めを本線評価。2号艇も相手候補。",

        bets: "4-2-1 / 4-1-2",

        boats: [

            { number: 1, name: "選手A", score: 64 },

            { number: 2, name: "選手B", score: 70 },

            { number: 3, name: "選手C", score: 59 },

            { number: 4, name: "選手D", score: 82 },

            { number: 5, name: "選手E", score: 55 },

            { number: 6, name: "選手F", score: 42 }

        ]

    },

    "戸田 9R": {

        rating: "A",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "3号艇",

        winRate: "63%",

        comment: "1号艇の逃げを本線。3号艇を相手筆頭に評価。",

        bets: "1-3-4 / 1-4-3",

        boats: [

            { number: 1, name: "選手A", score: 91 },

            { number: 2, name: "選手B", score: 65 },

            { number: 3, name: "選手C", score: 78 },

            { number: 4, name: "選手D", score: 73 },

            { number: 5, name: "選手E", score: 50 },

            { number: 6, name: "選手F", score: 41 }

        ]

    },

    "戸田 10R": {

        rating: "S",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "4号艇",

        winRate: "68%",

        comment: "本日の勝負レース候補。1号艇を強く評価。",

        bets: "1-4-2 / 1-2-4 / 1-4-3",

        boats: [

            { number: 1, name: "選手A", score: 94 },

            { number: 2, name: "選手B", score: 76 },

            { number: 3, name: "選手C", score: 64 },

            { number: 4, name: "選手D", score: 86 },

            { number: 5, name: "選手E", score: 57 },

            { number: 6, name: "選手F", score: 45 }

        ]

    },

    "戸田 11R": {

        rating: "A-",

        mainPick: "2号艇",

        mainPickName: "選手B",

        hole: "5号艇",

        winRate: "54%",

        comment: "2号艇を中心評価。5号艇の絡みに警戒。",

        bets: "2-1-5 / 2-5-1",

        boats: [

            { number: 1, name: "選手A", score: 71 },

            { number: 2, name: "選手B", score: 89 },

            { number: 3, name: "選手C", score: 62 },

            { number: 4, name: "選手D", score: 58 },

            { number: 5, name: "選手E", score: 74 },

            { number: 6, name: "選手F", score: 46 }

        ]

    },

    "戸田 12R": {

        rating: "S",

        mainPick: "1号艇",

        mainPickName: "選手A",

        hole: "3号艇",

        winRate: "71%",

        comment: "最終レースの本命候補。1号艇を中心に評価。",

        bets: "1-3-2 / 1-2-3 / 1-3-4",

        boats: [

            { number: 1, name: "選手A", score: 96 },

            { number: 2, name: "選手B", score: 78 },

            { number: 3, name: "選手C", score: 85 },

            { number: 4, name: "選手D", score: 69 },

            { number: 5, name: "選手E", score: 54 },

            { number: 6, name: "選手F", score: 43 }

        ]

    }

};

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

/*
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

  const toda = data.programs.stadiums["2"];

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

  renderBoats(boats);

}

*/
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
