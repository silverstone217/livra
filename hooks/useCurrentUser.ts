"use client";

import { getUser } from "@/actions/authAction";
import { UserType } from "@/types/auth";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();
        if (!response) {
          setUser(null);
          return;
        }
        setUser(response);
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);

  return {
    user,
    loading: isLoading,
  };
}
