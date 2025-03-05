import React from "react";
import { formatDate, getAwards } from "@/app/awards/utils";
import Link from "next/link";

export default function AwardsSection() {
  const awardsItems = getAwards().sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  return (
    <section className="grid gap-5 transition-all h-auto">
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {awardsItems.map((item, index) => (
          <li key={item.slug} className="list-disc">
            <Link
              href={`/awards/${item.slug}`}
              className={`flex justify-between ${
                index === 0
                  ? "pt-0 pb-3"
                  : index === awardsItems.length - 1
                  ? "pt-3 pb-0"
                  : "py-3"
              }`}
            >
              <p className="hover:underline">{item.metadata.title}</p>
              <p className="text-neutral-500">
                {formatDate(item.metadata.date)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
