
import React, { useEffect, useState } from "react";

const features = [
  {
    title: "Pose-Galerie mit System",
    description:
      "Suche, filtere und organisiere Posen nach Kategorien, Favoriten, Status oder eigenen Collections – inklusive Bulk-Aktionen.",
    detail: "2-spaltiges Grid, Shuffle, Drag & Drop, farbcodierte Collections.",
  },
  {
    title: "Live-Kamera mit Overlay",
    description:
      "Blende jede Pose als Overlay ein, passe die Opazität an und drehe oder spiegle das Motiv, während die Kamera läuft.",
    detail: "Opacity-Swipe, Rotation (0/90/180/270°), Mirror, Drittelraster, Zoom.",
  },
  {
    title: "Workflow-fokussierte Tools",
    description:
      "Markiere erledigte Posen, wechsle per Swipe, nutze Wetter-Widget, Gear-Check, Timeline und Sprachen EN/DE.",
    detail: "Done-Status, Golden Hour, Batterie- und Gear-Tracker, Daten-Reset, Themes.",
  },
];

const galleryFlow = [
  "Posen stöbern, suchen oder filtern (Kategorie, Kamera-Settings, Notizen).",
  "In Collections gruppieren – z. B. Kirche, Paarshooting, Empfang.",
  "Direkt in die Kamera springen, Overlay anpassen und Posen abhaken.",
  "Per Bulk-Aktion neu etikettieren, archivieren oder neu sortieren.",
];

const tabs = [
  {
    name: "Home (Galerie)",
    points: [
      "Header mit Fortschritt (z. B. 5/9 done) und Aktionen: Shuffle, Reorder, Add.",
      "Suchfeld, Filterchips und Bulk-Bar bei Mehrfachauswahl.",
      "2-Spalten-Gitter mit Thumbnails, Favoritenstern, Kategorien-Badge und Done-Overlay.",
    ],
  },
  {
    name: "Camera (Overlay)",
    points: [
      "Fullscreen-Kamera mit wischbarer Pose-Navigation (links/rechts).",
      "Overlay-Card für Notizen & Kamera-Settings, Grid und Mirror-Buttons.",
      "Wetter-Widget mit Temperatur, Sunrise/Sunset und Golden Hour.",
    ],
  },
  {
    name: "Tools",
    points: [
      "Batterie-, Gear- und Timeline-Helfer für stressfreie Shootings.",
      "Sammlung kleiner Utilities, die den Shooting-Tag vorbereiten.",
    ],
  },
  {
    name: "Settings",
    points: [
      "Theme (Light/Dark), Overlay-Opacity, Kamera-Defaults (Zoom, Grid, Weather).",
      "Sprache EN/DE, Daten-Reset, Archiv-Verwaltung.",
    ],
  },
];

const designTokens = [
  {
    title: "Light Mode",
    swatch: "bg-slate-50 text-slate-900 border-slate-200",
    text: "Background #f9fafb, Cards weiß, Text #0f172a, Border #e5e7eb.",
  },
  {
    title: "Dark Mode",
    swatch: "bg-slate-950 text-slate-100 border-slate-700",
    text: "Background #020617, Cards #0f172a, Text #e5e7eb, Border #374151.",
  },
  {
    title: "Akzentfarben",
    swatch: "bg-gradient-to-r from-brand-500 via-teal-400 to-sky-400 text-white border-transparent",
    text: "Brand: Violett (#7f56d9) kombiniert mit Teal & Sky für lebendige Akzente.",
  },
];
const FooterLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm text-slate-300 hover:text-white transition underline-offset-4 hover:underline"
  >
    {children}
  </a>
);

const DatenschutzSection = () => (
  <section
    id="datenschutz"
    className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 text-slate-200"
  >
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Datenschutz</p>
      <h3 className="text-3xl sm:text-4xl font-bold text-white">
        Datenschutzerklärung für die WeddingBuddy App
      </h3>
      <p className="text-sm text-slate-400">Letzte Aktualisierung: 28.11.2025</p>
      <p>
        Diese Datenschutzerklärung informiert dich darüber, wie personenbezogene Daten innerhalb der mobilen
        Anwendung WeddingBuddy verarbeitet werden. Der Schutz deiner Daten ist uns wichtig. Wir verarbeiten
        personenbezogene Daten ausschließlich gemäß der Datenschutz-Grundverordnung (DSGVO).
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">1. Verantwortlicher</h4>
        <p>Dominik Teichröb / Harterschnitt</p>
        <p>
          E-Mail:{' '}
          <a className="underline hover:text-white" href="mailto:harterschnitt@gmail.de">
            harterschnitt@gmail.de
          </a>
        </p>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">2. Art der verarbeiteten Daten</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">2.1. Nutzereigene Bilder:</span> Bilder, die du manuell importierst
            oder als Overlay nutzt. Diese Bilder werden ausschließlich lokal auf deinem Gerät verarbeitet und
            nicht gespeichert, hochgeladen, geteilt oder an Dritte weitergegeben.
          </li>
          <li>
            <span className="font-semibold">2.2. Pinterest-Daten (optional):</span> Wenn du dich per Pinterest
            OAuth einloggst, verarbeiten wir dein Pinterest-Zugriffstoken, deine Boards und Pins sowie
            Pin-Bild-URLs. Die Daten dienen nur dem Abruf deiner eigenen Pins, werden nicht gespeichert, nicht
            kombiniert, nicht analysiert und nicht weitergegeben. Die Verbindung erfolgt über die offizielle
            Pinterest-API.
          </li>
          <li>
            <span className="font-semibold">2.3. Geräteberechtigungen:</span> Kamera (Overlay über der Kamera
            anzeigen) und Fotos/Bibliothek (eigene Bilder auswählen). Keine Kamera- oder Fotodaten werden
            gespeichert oder an Server übertragen.
          </li>
        </ul>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">3. Zweck der Verarbeitung</h4>
        <p>Wir verarbeiten personenbezogene Daten ausschließlich zur Bereitstellung folgender Funktionen:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Import eigener Bilder als Overlay</li>
          <li>Anzeigen eigener Pinterest-Pins als Overlay (optional)</li>
          <li>Nutzung der Kamera in Kombination mit einem Inspirationsbild</li>
          <li>Anpassung von Transparenz/Position des Overlays</li>
          <li>Optimale Nutzung der App-Funktionen</li>
        </ul>
        <p className="text-slate-300">Eine darüber hinausgehende Verarbeitung findet nicht statt.</p>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">4. Keine Speicherung, kein Tracking, keine Werbung</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Wir speichern keine personenbezogenen Daten auf unseren Servern.</li>
          <li>Wir nutzen keine Cookies, kein Tracking, kein Analytics.</li>
          <li>Wir zeigen keine Werbung und erstellen keine Profile.</li>
          <li>Alles bleibt zu 100 % lokal auf deinem Gerät.</li>
        </ul>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">5. Weitergabe von Daten</h4>
        <p>Es erfolgt keine Weitergabe personenbezogener Daten an:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pinterest (außer du loggst dich freiwillig ein)</li>
          <li>Dritte, Tracking-Dienste oder Werbepartner</li>
          <li>Unsere Server</li>
        </ul>
        <p>Bei Pinterest-Login erfolgt die Verarbeitung ausschließlich im Rahmen der Pinterest-API.</p>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">6. Pinterest Integration</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nutzung erfolgt über Pinterest OAuth.</li>
          <li>Wir erhalten ein temporäres Token zum Live-Abruf deiner Pins.</li>
          <li>Keine Speicherung, kein Export oder Veröffentlichung von Pinterest-Inhalten.</li>
          <li>Bilder werden nicht verändert oder gespeichert.</li>
          <li>Du kannst die Verbindung jederzeit in Pinterest widerrufen.</li>
        </ul>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">7. Rechtsgrundlage (DSGVO)</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (Pinterest-Login)</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung (Bereitstellung der App-Funktionen)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse (Betrieb der App)</li>
        </ul>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">8. Speicherdauer</h4>
        <p>Wir speichern nichts; alles verbleibt lokal auf deinem Gerät.</p>
        <p>Pinterest-Zugriffstoken werden nicht dauerhaft gespeichert und können jederzeit gelöscht werden.</p>
      </div>
    </div>

    <div className="space-y-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">9. Rechte der Nutzer</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Recht auf Auskunft, Berichtigung, Löschung, Einschränkung</li>
          <li>Recht auf Widerspruch und Datenübertragbarkeit</li>
          <li>Recht, erteilte Einwilligungen zu widerrufen</li>
        </ul>
        <p>Für alle Anfragen genügt eine E-Mail an harterschnitt@gmail.de.</p>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">10. Änderungen dieser Datenschutzerklärung</h4>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die aktuelle Version ist jederzeit in der App
          verfügbar.
        </p>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
        <h4 className="text-xl font-semibold text-white">11. Kontakt</h4>
        <p>Bei Fragen zur Verarbeitung deiner Daten:</p>
        <p>Dominik Teichröb / Harterschnitt</p>
        <p>
          E-Mail:{' '}
          <a className="underline hover:text-white" href="mailto:harterschnitt@gmail.de">
            harterschnitt@gmail.de
          </a>
        </p>
      </div>
    </div>
  </section>
);
function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to) => (event) => {
    event?.preventDefault();
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPrivacyPage = path.includes('datenschutz');

  if (isPrivacyPage) {
    return (
      <div className="min-h-screen text-white">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(127,86,217,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.25),transparent_38%)]" />
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
            <nav className="flex items-center justify-between mb-10">
              <a className="flex items-center gap-3" href="/" onClick={navigate('/')}>
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <span className="text-2xl">💍</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Weddingbuddy</p>
                  <h1 className="text-2xl font-semibold">WeddingPoses</h1>
                </div>
              </a>
              <div className="hidden sm:flex items-center gap-3">
                <button className="button-secondary" onClick={navigate('/')}>Zurück zur Startseite</button>
              </div>
            </nav>
            <div className="glass-card rounded-3xl p-6 border border-white/15">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Datenschutz</p>
              <h2 className="text-4xl font-bold text-white mt-3">Datenschutzerklärung</h2>
              <p className="text-slate-200 mt-3 max-w-3xl">
                Hier findest du alle Details zur Verarbeitung personenbezogener Daten in der WeddingBuddy App.
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
          <DatenschutzSection />
        </main>

        <footer className="border-t border-white/10 bg-slate-900/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
            <p className="text-sm">© {new Date().getFullYear()} WeddingPoses – Wedding Photography Assistant</p>
            <div className="flex items-center gap-6">
              <FooterLink href="/" onClick={navigate('/')}>Impressum</FooterLink>
              <FooterLink href="/datenschutz" onClick={navigate('/datenschutz')}>Datenschutz</FooterLink>
              <FooterLink href="/" onClick={navigate('/')}>AGB</FooterLink>
            </div>
          </div>
        </footer>
      </div>
    );
  }

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
                <a className="button-secondary" href="#features">
                  Feature-Übersicht
                </a>
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
                      <span className="text-lg">💍</span>
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
                      <p className="font-semibold">ƒ/1.8 • 35mm • 1/500s</p>
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
        <section id="features" className="space-y-8">
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
                    <p className="text-xs text-slate-400 mt-2">Farbcode • Lila</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-slate-300">Collection</p>
                    <p className="font-semibold">Reception</p>
                    <p className="text-xs text-slate-400 mt-2">Farbcode • Teal</p>
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
                <ul className="space-y-3 text-slate-200 list-disc list-inside">
                  {tab.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
                <p className="font-semibold">Wedding Poses – 5/9 done</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Shuffle</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Reorder</span>
                <span className="px-3 py-1 rounded-full bg-brand-500/30 border border-brand-400/40">Add</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Couple • ƒ/1.8 35mm", "Family • ƒ/2.8 50mm", "Candid • ƒ/2.0 28mm", "Details • ƒ/3.2 70mm"].map((card) => (
                <div key={card} className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 rounded-full text-xs bg-brand-500/30 border border-brand-400/30">Badge</span>
                    <span className="text-lg">?</span>
                  </div>
                  <p className="font-semibold">{card}</p>
                  <p className="text-xs text-slate-300">Done-Checkbox & Drag-Handle sichtbar in Reorder Mode.</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">Bulk Action Bar</p>
                <p className="text-sm text-slate-300">Auswahl: 6 Posen • Aktionen: Kategorie, Done, Archive, Collection</p>
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
          <p className="text-sm">© {new Date().getFullYear()} WeddingPoses – Wedding Photography Assistant</p>
          <div className="flex items-center gap-6">
            <FooterLink href="#impressum">Impressum</FooterLink>
            <FooterLink href="/datenschutz" onClick={navigate('/datenschutz')}>Datenschutz</FooterLink>
            <FooterLink href="#agb">AGB</FooterLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

