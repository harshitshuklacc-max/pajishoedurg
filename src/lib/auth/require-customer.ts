import { getCustomerSession, type CustomerSession } from "./session";

export async function requireCustomer() {
  const session = await getCustomerSession();
  if (!session) {
    return { error: "Please log in to place an order.", status: 401 as const, session: null as CustomerSession | null };
  }
  return { error: null, status: 200 as const, session };
}
