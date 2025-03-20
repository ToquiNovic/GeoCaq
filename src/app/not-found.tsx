// app/not-found.tsx
"use client";

import React from "react";
import { NotFoundIcon } from "@/assets/notFoundIcon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
      <div className="text-center">
        <NotFoundIcon className="w-auto h-56 mx-auto" />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          No podemos encontrar esta página.
        </p>

        <Button onClick={() => router.back()} className="mt-6">
          Volver a la página anterior
        </Button>
      </div>
    </div>
  );
}
