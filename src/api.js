const BASE_URL = "http://localhost:9090/orders";

export async function createOrder(order) {
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  return response.json();
}
