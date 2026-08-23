export default {

  async fetch(request) {

    const url = new URL(request.url);

    // CORS

    const corsHeaders = {

      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Methods": "GET, OPTIONS",

      "Access-Control-Allow-Headers": "Content-Type"

    };

    // OPTIONS

    if (request.method === "OPTIONS") {

      return new Response(null, {

        status: 204,

        headers: corsHeaders

      });

    }

    // 今日の出走表

    if (url.pathname === "/api/races") {

      try {

        const response = await fetch(

          "https://boatraceopenapi.github.io/api/v1/today.json"

        );

        if (!response.ok) {

          return new Response(

            JSON.stringify({

              error: "出走表データを取得できませんでした",

              status: response.status

            }),

            {

              status: 500,

              headers: {

                "Content-Type": "application/json; charset=UTF-8",

                ...corsHeaders

              }

            }

          );

        }

        const data = await response.json();

        return new Response(

          JSON.stringify(data),

          {

            status: 200,

            headers: {

              "Content-Type": "application/json; charset=UTF-8",

              ...corsHeaders

            }

          }

        );

      } catch (error) {

        return new Response(

          JSON.stringify({

            error: "API接続エラー",

            message: error.message

          }),

          {

            status: 500,

            headers: {

              "Content-Type": "application/json; charset=UTF-8",

              ...corsHeaders

            }

          }

        );

      }

    }

    // ヘルスチェック

    if (url.pathname === "/api/health") {

      return new Response(

        JSON.stringify({

          ok: true,

          service: "BOAT AI Worker"

        }),

        {

          status: 200,

          headers: {

            "Content-Type": "application/json; charset=UTF-8",

            ...corsHeaders

          }

        }

      );

    }

    return new Response("BOAT AI Worker", {

      status: 200,

      headers: corsHeaders

    });

  }

};
