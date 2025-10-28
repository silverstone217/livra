import { getUser } from "@/actions/authAction";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">
        Bonjour, {user.name} 👋
      </h2>
    </div>
  );
}
