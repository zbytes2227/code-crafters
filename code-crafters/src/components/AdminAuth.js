async function Adminauth() {
    const api_data = await fetch("/admin/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    return data;
  }
  
  export default Adminauth;
  