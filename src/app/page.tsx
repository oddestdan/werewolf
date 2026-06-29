"use client";

import { useState } from "react";
import Image from "next/image";
import { dictionaries, Locale } from "@/locales/dict";

function RoleCard({
  imageSrc,
  name,
  card,
  description,
}: {
  imageSrc: string;
  name: string;
  card: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-white m-4 w-64 text-center transition-transform hover:scale-105 hover:shadow-md">
      <div className="relative w-56 h-80 mb-4 overflow-hidden rounded-md border border-gray-200">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold font-serif mb-1">{name}</h3>
      <p className="text-sm text-book-accent font-semibold mb-3 border-b border-gray-200 pb-2 inline-block">
        {card}
      </p>
      <p className="text-sm font-serif leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("uk");
  const dict = dictionaries[locale];

  return (
    <main className="min-h-screen max-w-5xl mx-auto py-12 px-6">
      <header className="flex justify-between items-center mb-12 border-b-2 border-black pb-4">
        <h1 className="text-4xl font-bold font-serif tracking-tight">{dict.title}</h1>
        <button
          onClick={() => setLocale(locale === "uk" ? "en" : "uk")}
          className="px-5 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors uppercase text-sm font-bold tracking-widest"
        >
          {locale === "uk" ? "EN" : "UK"}
        </button>
      </header>

      <section className="prose prose-lg mb-16 text-book-text font-serif max-w-none text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-book-accent pb-2 inline-block">
              {dict.wakingOrder}
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>
                <strong>{dict.roles.werewolf.name}</strong> ({dict.roles.werewolf.card})
              </li>
              <li>
                <strong>{dict.roles.mason.name}</strong> ({dict.roles.mason.card})
              </li>
              <li>
                <strong>{dict.roles.seer.name}</strong> ({dict.roles.seer.card})
              </li>
              <li>
                <strong>{dict.roles.robber.name}</strong> ({dict.roles.robber.card})
              </li>
              <li>
                <strong>{dict.roles.troublemaker.name}</strong> ({dict.roles.troublemaker.card})
              </li>
              <li>
                <strong>{dict.roles.insomniac.name}</strong> ({dict.roles.insomniac.card})
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-book-accent pb-2 inline-block">
              {dict.staticRoles}
            </h2>
            <ul className="list-disc list-inside space-y-3 pl-2 mb-8">
              <li>
                <strong>{dict.roles.tanner.name}</strong> ({dict.roles.tanner.card})
              </li>
              <li>
                <strong>{dict.roles.hunter.name}</strong> ({dict.roles.hunter.card})
              </li>
            </ul>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm inline-block">
              <h2 className="text-2xl font-bold text-book-accent">
                {dict.discussionTime}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-serif mb-8 text-center border-b border-black pb-4 uppercase tracking-widest">
          {locale === "uk" ? "Ролі" : "Roles"}
        </h2>
        <div className="flex flex-wrap justify-center -mx-4 gap-y-8">
          <RoleCard
            imageSrc="/cards/werewolf.png"
            name={dict.roles.werewolf.name}
            card={dict.roles.werewolf.card}
            description={dict.roles.werewolf.description}
          />
          <RoleCard
            imageSrc="/cards/mason.png"
            name={dict.roles.mason.name}
            card={dict.roles.mason.card}
            description={dict.roles.mason.description}
          />
          <RoleCard
            imageSrc="/cards/seer.png"
            name={dict.roles.seer.name}
            card={dict.roles.seer.card}
            description={dict.roles.seer.description}
          />
          <RoleCard
            imageSrc="/cards/robber.png"
            name={dict.roles.robber.name}
            card={dict.roles.robber.card}
            description={dict.roles.robber.description}
          />
          <RoleCard
            imageSrc="/cards/troublemaker.png"
            name={dict.roles.troublemaker.name}
            card={dict.roles.troublemaker.card}
            description={dict.roles.troublemaker.description}
          />
          <RoleCard
            imageSrc="/cards/insomniac.png"
            name={dict.roles.insomniac.name}
            card={dict.roles.insomniac.card}
            description={dict.roles.insomniac.description}
          />
          <RoleCard
            imageSrc="/cards/tanner.png"
            name={dict.roles.tanner.name}
            card={dict.roles.tanner.card}
            description={dict.roles.tanner.description}
          />
          <RoleCard
            imageSrc="/cards/hunter.png"
            name={dict.roles.hunter.name}
            card={dict.roles.hunter.card}
            description={dict.roles.hunter.description}
          />
        </div>
      </section>
    </main>
  );
}
