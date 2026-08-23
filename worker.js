export default {

  async fetch(request) {

    const url = new URL(request.url);

    // 今日の出走表を取得

    if (url.pathname === "/api/races") {

      try {

        const response = await fetch(

          "https://boatraceopenapi.github.io/api/v1/today.json"

        );

        if (!response.ok) {

          return new Response(

            JSON.stringify({

              error: "出走表データを取得できませんでした"

            }),

            {

              status: 500,

              headers: {

                "Content-Type": "application/json; charset=utf-8"

              }

            }

          );

        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {

          headers: {

            "Content-Type": "application/json; charset=utf-8",

            "Access-Control-Allow-Origin": "*"

          }

        });

      } catch (error) {

        return new Response(

          JSON.stringify({

            error: "API接続エラー",

            message: error.message

          }),

          {

            status: 500,

            headers: {

              "Content-Type": "application/json; charset=utf-8"

            }

          }

        );

      }

    }

    return new Response("BOAT AI Worker OK");

  }

};
