async function Auth() {
    const api_data = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    return data;
  }
  
  export default Auth;
  