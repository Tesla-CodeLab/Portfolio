import { PrismaClient } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  __prisma?: PrismaClient;
};

export function getPrisma() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not set");
  }

  const g = globalThis as GlobalWithPrisma;
  const client = g.__prisma ?? new PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    g.__prisma = client;
  }

  return client;
}
