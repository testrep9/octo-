const INSTAGRAM_APP_ID = "YOUR_INSTAGRAM_APP_ID";
const REDIRECT_URI = "https://your-vercel-url.vercel.app/auth/instagram";

export default function App() {
  const loginWithInstagram = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?` +
      `client_id=${INSTAGRAM_APP_ID}&` +
      `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
      `scope=user_profile,user_media&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Instagram Business Login</h1>
      <button onClick={loginWithInstagram}>Login with Instagram</button>
    </main>
  );
}
