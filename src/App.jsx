import React from 'react';

const features = [
  {
    title: 'Pose-Galerie mit System',
    description:
      'Suche, filtere und organisiere Posen nach Kategorien, Favoriten, Status oder eigenen Collections – inklusive Bulk-Aktionen.',
    detail: '2-spaltiges Grid, Shuffle, Drag & Drop, farbcodierte Collections.',
  },
  {
    title: 'Live-Kamera mit Overlay',
    description:
      'Blende jede Pose als Overlay ein, passe die Opazität an und drehe oder spiegle das Motiv, während die Kamera läuft.',
    detail: 'Opacity-Swipe, Rotation (0/90/180/270°), Mirror, Drittelraster, Zoom.',
  },
  {
    title: 'Workflow-fokussierte Tools',
    description:
      'Markiere erledigte Posen, wechsle per Swipe, nutze Wetter-Widget, Gear-Check, Timeline und Sprachen EN/DE.',
    detail: 'Done-Status, Golden Hour, Batterie- und Gear-Tracker, Daten-Reset, Themes.',
  },
];

const galleryFlow = [
  'Posen stöbern, suchen oder filtern (Kategorie, Kamera-Settings, Notizen).',
  'In Collections gruppieren – z. B. Kirche, Paarshooting, Empfang.',
  'Direkt in die Kamera springen, Overlay anpassen und Posen abhaken.',
  'Per Bulk-Aktion neu etikettieren, archivieren oder neu sortieren.',
];

const tabs = [
  {
    name: 'Home (Galerie)',
    description:
      'Deine Pose-Bibliothek mit Fortschrittsanzeige, Shuffle, Reorder und Add – optimiert für schnelles Browsen.',
    highlights: [
      'Suchfeld + Filterchips + Bulk-Bar bei Mehrfachauswahl',
      '2-Spalten-Grid mit Favoritenstern & Kategorie-Badges',
      'Done-Overlay, Drag-Handle im Reorder-Modus',
    ],
  },
  {
    name: 'Camera (Overlay)',
    description:
      'Fullscreen-Kamera mit Pose-Overlay, das du spiegeln, drehen oder per Swipe in der Opazität anpassen kannst.',
    highlights: [
      'Swipe-Navigation links/rechts + Previous/Next Buttons',
      'Overlay-Card für Notizen & Kamera-Settings',
      'Wetter-Widget: Temperatur, Sunrise/Sunset, Golden Hour',
    ],
  },
  {
    name: 'Tools',
    description:
      'Praktische Helfer für den Shooting-Tag – vom Gear-Check bis zur Timeline, damit nichts vergessen wird.',
    highlights: [
      'Batterie-, Gear- und Timeline-Übersichten',
      'Kleine Utilities, die den Ablauf strukturieren',
      'Kontextbezogene Shortcuts für den Workflow',
    ],
  },
  {
    name: 'Settings',
    description:
      'Feineinstellungen für Look & Feel sowie Datensicherheit – alles, was die App persönlich macht.',
    highlights: [
      'Theme: Light/Dark, Overlay-Opacity & Kamera-Defaults',
      'Sprache EN/DE, Archiv- und Daten-Reset-Optionen',
      'Wetter-Widget & Grid als Standard speichern',
    ],
  },
];

const designTokens = [
  {
    title: 'Light Mode',
    swatch: 'bg-slate-50 text-slate-900 border-slate-200',
    text: 'Background #f9fafb, Cards weiß, Text #0f172a, Border #e5e7eb.',
  },
  {
    title: 'Dark Mode',
    swatch: 'bg-slate-950 text-slate-100 border-slate-700',
    text: 'Background #020617, Cards #0f172a, Text #e5e7eb, Border #374151.',
  },
  {
    title: 'Akzentfarben',
    swatch: 'bg-gradient-to-r from-brand-500 via-teal-400 to-sky-400 text-white border-transparent',
    text: 'Brand: Violett (#7f56d9) kombiniert mit Teal & Sky für lebendige Akzente.',
  },
];

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-slate-300 hover:text-white transition underline-offset-4 hover:underline"
  >
    {children}
  </a>
);

function App() {
  return (
    <div className="min-h-screen text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(127,86,217,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.25),transparent_38%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
          <nav className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                <span className="text-2xl">💍</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Weddingbuddy</p>
                <h1 className="text-2xl font-semibold">WeddingPoses</h1>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="button-secondary">Produkt-Tour</button>
              <button className="button-primary">Jetzt Early Access sichern</button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-teal-300 animate-pulse" />
                Live Overlay, Golden Hour & Collections – perfekt für Hochzeiten
              </span>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Mobile App für Hochzeitsfotograf:innen</p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Die Pose-Galerie, die in deiner Kamera weiterlebt.
                  <br />
                  <span className="text-gradient">Referenzen, Overlays & Workflow</span>
                </h2>
                <p className="text-lg text-slate-200 max-w-2xl">
                  WeddingPoses kombiniert eine kuratierte Pose-Library mit einer Live-Overlay-Kamera. Suche, filtere und plane deine Posen – und blende sie direkt als semi-transparentes Overlay ein, während du fotografierst.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="button-primary">Demo anfragen</button>
                <button className="button-secondary">Feature-Übersicht</button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left max-w-xl">
                <div className="glass-card p-4 rounded-2xl">
                  <p className="text-sm text-slate-300">Such- & Filterpower</p>
                  <p className="font-semibold text-lg">Titel, Notizen, Kamera-Settings, Kategorien</p>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                  <p className="text-sm text-slate-300">Schneller Zugriff</p>
                  <p className="font-semibold text-lg">Swipe, Buttons & Done-Markierungen</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/30 via-sky-400/20 to-teal-300/30 blur-3xl" />
              <div className="relative glass-card rounded-3xl border-white/20 overflow-hidden">
                <div className="bg-slate-900/60 px-6 py-5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-brand-500/30 flex items-center justify-center border border-white/10">
                      <span className="text-lg">📷</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Camera Tab</p>
                      <p className="font-semibold">Pose Overlay aktiv</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/15">Opacity 65%</span>
                </div>
                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-4">
                      <p className="text-sm text-slate-300">Pose</p>
                      <p className="font-semibold">Golden Hour Embrace</p>
                      <p className="text-sm text-slate-300 mt-2">Notizen: enger Rahmen, Stirn an Stirn, Lächeln.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4">
                      <p className="text-sm text-slate-300">Camera Settings</p>
                      <p className="font-semibold">ƒ1.8 · 35mm · 1/500s</p>
                      <p className="text-sm text-slate-300 mt-2">Grid & Mirror aktiv</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Done-Status pro Pose
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-100 border border-teal-300/30">Mirror</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Rotate 90°</span>
                    </div>
                  </div>
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-brand-500/50 via-fuchsia-400/40 to-teal-300/50 border border-white/10 flex items-center justify-center text-center px-6">
                    <p className="font-semibold text-lg">Overlay Vorschau – transparenter Pose-Silhouette Layer auf Live-Kamera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16 space-y-24">
        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Warum WeddingPoses?</p>
            <h3 className="text-3xl sm:text-4xl font-bold">Alle Pose-Referenzen, live nutzbar in deiner Kamera.</h3>
            <p className="text-lg text-slate-200 max-w-3xl">
              Eine Bibliothek ist gut – ein Overlay ist besser. WeddingPoses verbindet Planung und Ausführung: Posen sammeln, filtern, sortieren und sofort als Overlay nutzen. Mit Favoriten, Done-Status und Bulk-Aktionen behältst du den Überblick.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-3xl p-6 space-y-3">
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-slate-200">{feature.description}</p>
                <p className="text-sm text-slate-300">{feature.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Workflow</p>
              <h3 className="text-3xl font-bold">Von der Idee bis zum fertig abgehakten Motiv.</h3>
              <p className="text-slate-200">Der App-Flow ist auf Hochzeitsreportagen optimiert – schnelle Navigation, klare Filter und jederzeit die wichtigsten Infos im Blick.</p>
              <div className="space-y-3">
                {galleryFlow.map((step, index) => (
                  <div key={step} className="flex gap-3 items-start">
                    <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-brand-500/20 border border-brand-400/40 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-slate-100">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-slate-300">Filters & Collections</p>
                    <p className="font-semibold">Aktive Filter: Couple • Favoriten • 35mm</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/15">Shuffle</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-slate-300">Collection</p>
                    <p className="font-semibold">Kirche</p>
                    <p className="text-xs text-slate-400 mt-2">Farbcode · Lila</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-slate-300">Collection</p>
                    <p className="font-semibold">Reception</p>
                    <p className="text-xs text-slate-400 mt-2">Farbcode · Teal</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 col-span-2">
                    <p className="text-sm text-slate-300">Bulk Bar</p>
                    <p className="font-semibold">4 Posen ausgewählt</p>
                    <p className="text-xs text-slate-400 mt-2">Aktionen: Kategorie, Done, Archive, Reorder</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-brand-500/20 via-teal-400/15 to-sky-400/20 border border-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Kamera-Tab Schnellinfos</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4 text-sm text-slate-100">
                  <div>
                    <p className="font-semibold">Overlay</p>
                    <p>Opacity via Swipe, Mirror & Rotate Buttons, Rule-of-thirds Grid.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Navigation</p>
                    <p>Swipe links/rechts oder Buttons für Previous/Next + Done-Check.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Wetter</p>
                    <p>Temp, Sunrise/Sunset, Golden Hour direkt im Sucher.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Tabs & Bereiche</p>
            <h3 className="text-3xl sm:text-4xl font-bold">Alles, was Hochzeitsfotograf:innen brauchen.</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tabs.map((tab) => (
              <div key={tab.name} className="glass-card rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">✨</span>
                  <h4 className="text-xl font-semibold">{tab.name}</h4>
                </div>
                <p className="text-slate-200 leading-relaxed">{tab.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tab.highlights.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-100 shadow-inner"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Visuelles System</p>
            <h3 className="text-3xl font-bold">Light & Dark Mode – immer mit klarer Typografie.</h3>
            <p className="text-slate-200">Ionicons und SF Symbols sorgen für vertraute UI-Sprache. DM Sans liefert die Display-Überschriften, Inter die Lesbarkeit im Flow.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {designTokens.map((token) => (
                <div key={token.title} className="glass-card rounded-2xl p-4 space-y-2">
                  <div className={`h-16 rounded-xl border ${token.swatch}`} />
                  <p className="font-semibold">{token.title}</p>
                  <p className="text-sm text-slate-300">{token.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Beispiel-Header</p>
                <p className="font-semibold">Wedding Poses — 5/9 done</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Shuffle</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Reorder</span>
                <span className="px-3 py-1 rounded-full bg-brand-500/30 border border-brand-400/40">Add</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Couple · ƒ1.8 35mm', 'Family · ƒ2.8 50mm', 'Candid · ƒ2.0 28mm', 'Details · ƒ3.2 70mm'].map((card) => (
                <div key={card} className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 rounded-full text-xs bg-brand-500/30 border border-brand-400/30">Badge</span>
                    <span className="text-lg">⭐️</span>
                  </div>
                  <p className="font-semibold">{card}</p>
                  <p className="text-xs text-slate-300">Done-Checkbox & Drag-Handle sichtbar in Reorder Mode.</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">Bulk Action Bar</p>
                <p className="text-sm text-slate-300">Auswahl: 6 Posen · Aktionen: Kategorie, Done, Archive, Collection</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-300/30 text-xs">Produktiv</span>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Bereit für den nächsten Wedding-Shoot?</p>
            <h3 className="text-3xl font-bold">Teste WeddingPoses und spare Zeit vor Ort.</h3>
            <p className="text-slate-200 max-w-2xl">Hole dir alle Posen, Overlays und Werkzeuge in eine App. Nutze Done-Status, Favoriten und Collections, um jede Hochzeit strukturiert zu fotografieren – egal ob Portrait, Familie, Details oder kreative Momente.</p>
            <div className="flex flex-wrap gap-3">
              <button className="button-primary">Jetzt Early Access sichern</button>
              <button className="button-secondary">Newsletter abonnieren</button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl bg-gradient-to-br from-brand-500/40 via-fuchsia-500/30 to-teal-400/40 border border-white/15 p-6 shadow-2xl">
              <div className="flex items-center justify-between text-sm text-white mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Live Camera</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Golden Hour 20:13</span>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-3">
                <p className="font-semibold">Pose Navigation</p>
                <p className="text-sm text-slate-100">Swipe links/rechts oder nutze Previous/Next Buttons.</p>
                <p className="text-sm text-slate-100">Markiere Posen als Done, archiviere sie oder füge neue Posen aus der Bibliothek hinzu.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs">Mirror</span>
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs">Rotate</span>
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs">Grid</span>
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs">Weather</span>
                </div>
              </div>
              <p className="text-xs text-white/80 mt-4">Durchdachte Gestensteuerung, native iOS Tab-Bar und langlebige Offline-Daten per AsyncStorage.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-900/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
          <p className="text-sm">© {new Date().getFullYear()} WeddingPoses · Wedding Photography Assistant</p>
          <div className="flex items-center gap-6">
            <FooterLink href="#impressum">Impressum</FooterLink>
            <FooterLink href="#datenschutz">Datenschutz</FooterLink>
            <FooterLink href="#agb">AGB</FooterLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
