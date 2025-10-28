import { PrismaClient } from "@prisma/client";

// Déclare un type pour le cache global de Prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Si déjà instancié (dev hot reload), on réutilise
export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // utile pour debug
  });

// On met en cache l'instance dans dev pour éviter de multiples connexions
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
