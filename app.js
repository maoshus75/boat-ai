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

function renderRace(raceName) {

  const race =

    races[raceName];

  if (!race) {

    console.error(

      "レースデータがありません:",

      raceName

    );

    return;

  }

  /* レース名 */

  document

    .getElementById("raceName")

    .textContent =

    raceName;

  /* 評価 */

  document

    .getElementById("rating")

    .textContent =

    race.rating;

  /* 本命 */

  document

    .getElementById("mainPick")

    .textContent =

    race.mainPick;

  document

    .getElementById("mainPickName")

    .textContent =

    race.mainPickName;

  /* 穴 */

  document

    .getElementById("hole")

    .textContent =

    race.hole;

  /* 勝率 */

  document

    .getElementById("winRate")

    .textContent =

    race.winRate;

  /* コメント */

  document

    .getElementById("comment")

    .textContent =

    race.comment;

  /* 買い目 */

  document

    .getElementById("bets")

    .textContent =

    race.bets;

  /* 6艇 */

  renderBoats(race.boats);

}

/* =========================

   6艇表示

========================= */

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

function init() {

  showToday();

  createRaceButtons();

  renderRace("戸田 10R");

}

/* =========================

   起動

========================= */

document.addEventListener(

  "DOMContentLoaded",

  init

);
