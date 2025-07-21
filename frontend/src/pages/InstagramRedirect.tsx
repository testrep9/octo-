import { useEffect } from "react";

export default function InstagramRedirect() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      fetch("https://YOUR_SUPABASE_PROJECT.functions.supabase.co/exchange-instagram-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Instagram Access Token:", data.access_token);
        });
    }
  }, []);

  return <p>Logging in with Instagram...</p>;
}
