import React from "react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-gray-500">Page not found</p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
