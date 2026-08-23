"use strict";

/* ==========================================

   BOAT AI

   レースデータ

========================================== */

const races = {

  "戸田 10R": {

    rating: "★★★★★",

    confidence: "★★★★★",

    mainPick: "1号艇",

    hole: "4号艇",

    winRate: "48.2%",

    comment:

      "イン有利を中心に1号艇を本命評価。まずは1号艇を軸に展開を考える。",

    bets:

      "1-2-4 / 1-4-2 / 1-2-boats: [

    { number: 1, name: "選手A", score: "48.2%", detail: "1着期待度" },

    { number: 2, name: "選手B", score: "21.6%", detail: "1着期待度" },

    { number: 3, name: "選手C", score: "12.4%", detail: "1着期待度" },

    { number: 4, name: "選手D", score: "9.8%", detail: "1着期待度" },

    { number: 5, name: "選手E", score: "5.1%", detail: "1着期待度" },

    { number: 6, name: "選手F", score: "3.0%", detail: "1着期待度" }

  ]



  },

  "平和島 8R": {

    rating: "★★★★☆",

    confidence: "★★★★☆",

    mainPick: "2号艇",

    hole: "3号艇",

    winRate: "34.5%",

    comment:

      "2号艇を中心に評価。展開次第では3号艇の食い込みにも注目。",

    bets:

      "2-1-3 / 2-3-1 / 1-2-3"

     boats: [

    { number: 1, name: "選手A", score: "48.2%", detail: "1着期待度" },

    { number: 2, name: "選手B", score: "21.6%", detail: "1着期待度" },

    { number: 3, name: "選手C", score: "12.4%", detail: "1着期待度" },

    { number: 4, name: "選手D", score: "9.8%", detail: "1着期待度" },

    { number: 5, name: "選手E", score: "5.1%", detail: "1着期待度" },

    { number: 6, name: "選手F", score: "3.0%", detail: "1着期待度" }

  ]


  },

  "江戸川 11R": {

    rating: "★★★☆☆",

    confidence: "★★★☆☆",

    mainPick: "2号艇",

    hole: "3号艇",

    winRate: "29.1%",

    comment:

      "混戦。2号艇を軸候補として評価し、3号艇の絡みにも注意。",

    bets:

      "2-1-3 / 2-3-1 / 1-2-3"
boats: [

    { number: 1, name: "選手A", score: "48.2%", detail: "1着期待度" },

    { number: 2, name: "選手B", score: "21.6%", detail: "1着期待度" },

    { number: 3, name: "選手C", score: "12.4%", detail: "1着期待度" },

    { number: 4, name: "選手D", score: "9.8%", detail: "1着期待度" },

    { number: 5, name: "選手E", score: "5.1%", detail: "1着期待度" },

    { number: 6, name: "選手F", score: "3.0%", detail: "1着期待度" }

  ]


  }

};

/* ==========================================

   画面を書き換える

========================================== */

function renderRace(raceName) {

  const race = races[raceName];

  if (!race) {

    console.error(

      "レースデータがありません:",

      raceName

    );

    return;

  }

  document.getElementById("raceName").textContent =

    raceName;

  document.getElementById("rating").textContent =

    race.rating;

  document.getElementById("confidence").textContent =

    race.confidence;

  document.getElementById("mainPick").textContent =

    race.mainPick;

  document.getElementById("hole").textContent =

    race.hole;

  document.getElementById("winRate").textContent =

    race.winRate;

  document.getElementById("comment").textContent =

    race.comment;

  document.getElementById("bets").textContent =

    race.bets;

}

/* ==========================================

   レースボタン

========================================== */

function setupRaceButtons() {

  const buttons =

    document.querySelectorAll(".race-card");

  buttons.forEach(function(button) {

    button.addEventListener(

      "click",

      function() {

        const raceName =

          button.getAttribute("data-race");

        console.log(

          "選択されたレース:",

          raceName

        );

        if (!raceName) {

          console.error(

            "data-raceがありません"

          );

          return;

        }

        /*

         * 全ボタンの選択を解除

         */

        buttons.forEach(function(item) {

          item.classList.remove(

            "active"

          );

        });

        /*

         * 押したボタンを選択状態にする

         */

        button.classList.add(

          "active"

        );

        /*

         * レース内容を更新

         */

        renderRace(

          raceName

        );

      }

    );

  });

}

/* ==========================================

   ページ読み込み後に開始

========================================== */

document.addEventListener(

  "DOMContentLoaded",

  function() {

    setupRaceButtons();

    renderRace(

      "戸田 10R"

    );

  }

);
