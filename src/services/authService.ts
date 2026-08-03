const API_URL = "http://localhost:8001";

export async function login(Nombres: string, Apellidos: string, contrasena: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Nombres, Apellidos, contrasena })
  });
  return await res.json();
}

export function decodificarToken(token: string): any {
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload));
}

export function guardarSesion(token: string, tipo: string, panel: string) {
  if (typeof window !== "undefined"){
  localStorage.setItem("token", token);
  localStorage.setItem("tipo", tipo);
  localStorage.setItem("panel", panel);
}
}

export function obtenerToken(): string | null {
  if (typeof window !== "undefined"){ 
  return localStorage.getItem("token");
}
return null;
}

export function cerrarSesion() {
  if (typeof window !== "undefined"){

  localStorage.clear();
  window.location.href = "/";
}
}