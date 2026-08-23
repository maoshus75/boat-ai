export default {

  async fetch(request) {

    const url = new URL(request.url);

    // 今日の出走表を取得

    if (url.pathname === "/api/races") {

      const response = await fetch(

        "https://boatraceopenapi.github.io/api/v1/today.json"

      );

      if (!response.ok) {

        return new Response(

          JSON.stringify({

            error: "出走表データを取得できませんでした"

          }),

          {

            status: 502,

            headers: {

              "Content-Type": "application/json; charset=UTF-8",

              "Access-Control-Allow-Origin": "*"

            }

          }

        );

      }

      const data = await response.json();

      return new Response(JSON.stringify(data), {

        headers: {

          "Content-Type": "application/json; charset=UTF-8",

          "Access-Control-Allow-Origin": "*"

        }

      });

    }

    return new Response("BOAT AI API OK");

  }

};
