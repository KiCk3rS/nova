import { ModeToggle } from "@/components/mode-toggle";
import { 
  Database, 
  Layout, 
  Server, 
  BookOpen, 
  Zap, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Terminal,
  Code2,
  Check,
  Cpu,
  Globe,
  Layers,
  Lock,
  FileCheck,
  Key,
  Accessibility,
  Palette,
  Cloud,
  Box,
  Bot
} from "lucide-react";

// Composants SVG pour les logos de langages
const TechLogos = {
  NodeJS: (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 2L2.1 10v12L16 30l13.9-8V10L16 2zm0 2.3l11.9 6.9v11.6L16 27.7 4.1 22.8V11.2L16 4.3z" fill="#339933"/>
      <path d="M16 27.7V16l10.1-5.8v-2L16 14v13.7z" fill="#339933" fillOpacity="0.4"/>
      <path d="M16 14L5.9 8.2v2L16 16v-2z" fill="#339933" fillOpacity="0.6"/>
    </svg>
  ),
  CSharp: (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 2L2.5 9.8v12.4L16 30l13.5-7.8V9.8L16 2zm0 2.5l11.3 6.5v10L16 27.5 4.7 21V11L16 4.5z" fill="#512BD4"/>
      <path d="M23.5 11.5l-2-1.2-2 1.2 2 1.2 2-1.2z" fill="#fff"/>
      <path d="M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" fill="#512BD4"/>
    </svg>
  ),
  PHP: (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="16" cy="16" rx="14" ry="8" fill="#777BB4"/>
      <path d="M16 10c-5 0-8 2-8 6s3 6 8 6 8-2 8-6-3-6-8-6zm0 10c-3.5 0-6-1.5-6-4s2.5-4 6-4 6 1.5 6 4-2.5 4-6 4z" fill="#fff"/>
    </svg>
  ),
  Python: (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 2c-4 0-7 3-7 7v2h4V9c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v2h-5v5h9V9c0-4-3-7-7-7zm-6 9v5H5c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5h2v-4c0-2 1.5-3.5 3.5-3.5h5.5v-4.5H10zm12 7h-5.5v4.5H22c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5h-2v-4.5z" fill="url(#python_grad)"/>
      <defs>
        <linearGradient id="python_grad" x1="5" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3776AB"/>
          <stop offset="100%" stopColor="#FFD43B"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Go: (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12S4 22.6 4 16z" fill="#00ADD8" fillOpacity="0.2"/>
      <path d="M10 16c0-2 1-5 6-5s5 2 5 4h-3c0-1-1-2-2-2s-2 1-2 3 1 3 2 3 2-1 2-2h3c0 2-2 4-5 4s-6-3-6-5z" fill="#00ADD8"/>
    </svg>
  )
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-xl font-bold tracking-tight">NOVA</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                <a href="#vision" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Vision</a>
                <a href="#pillars" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Piliers</a>
                <a href="#compatibility" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compatibilité</a>
                <a href="#benefits" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Enjeux</a>
                <a 
                  href="https://github.com/org/nova" 
                  className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Documentation
                </a>
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-blue-100 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Architecture Unifiée v1.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500">
            Le standard technique <br /> pour nos ambitions numériques
          </h1>
          
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-10">
            Harmoniser, moderniser et accélérer. NOVA est le socle commun qui transforme 
            la manière dont nous concevons nos applications à l'échelle du groupe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
              Explorer la documentation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-lg font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Démarrer un projet
            </button>
          </div>
        </div>
      </section>

      {/* Code Preview / Vision */}
      <section id="vision" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Une vision unifiée</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                NOVA fournit une base évolutive permettant à chaque filiale de construire ses applications sur un cadre solide. Fini la redondance, place à l'efficacité.
              </p>
              <ul className="space-y-4">
                {[
                  "Modèle de données partagé et versionné",
                  "Génération automatique de code (SDKs)",
                  "Composants UI standardisés",
                  "Infrastructure as Code modulaire"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Code Window UI */}
            <div className="relative rounded-xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800 font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-950 border-b border-neutral-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-neutral-500 text-xs">nova.config.ts</span>
              </div>
              <div className="p-6 text-neutral-300 overflow-x-auto bg-neutral-900/50">
                <div className="grid grid-cols-[auto,1fr] gap-4 font-mono text-sm leading-relaxed">
                  <div className="text-neutral-600 select-none text-right">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15
                  </div>
                  <div className="font-mono text-sm leading-relaxed">
                    <div><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{`} defineConfig {`}`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@nova/core'</span>;</div>
                    <br/>
                    <div><span className="text-purple-400">export default</span> <span className="text-blue-400">defineConfig</span>({`{`}</div>
                    <div className="pl-4"><span className="text-sky-300">project</span>: <span className="text-green-400">'nova-app'</span>,</div>
                    <div className="pl-4"><span className="text-sky-300">version</span>: <span className="text-green-400">'1.0.0'</span>,</div>
                    <div className="pl-4"><span className="text-sky-300">modules</span>: [</div>
                    <div className="pl-8"><span className="text-green-400">'@nova/auth'</span>,</div>
                    <div className="pl-8"><span className="text-green-400">'@nova/design-system'</span>,</div>
                    <div className="pl-8"><span className="text-green-400">'@nova/data-layer'</span></div>
                    <div className="pl-4">],</div>
                    <div className="pl-4"><span className="text-sky-300">targets</span>: {`{`}</div>
                    <div className="pl-8"><span className="text-sky-300">api</span>: <span className="text-green-400">'typescript-node'</span>,</div>
                    <div className="pl-8"><span className="text-sky-300">client</span>: <span className="text-green-400">'react-next'</span></div>
                    <div className="pl-4">{`}`}</div>
                    <div>{`}`});</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piliers Section - Bento Grid */}
      <section id="pillars" className="py-24 bg-neutral-50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
              Les 5 Piliers de NOVA
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              Une architecture complète couvrant tout le cycle de vie de vos produits numériques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Carte 5: Serveur MCP (Mis en avant) */}
            <div className="md:col-span-3 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 dark:from-blue-900 dark:to-neutral-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-blue-500/30 dark:border-blue-800/50">
              {/* Background Abstract */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="h-10 px-4 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/10 flex items-center backdrop-blur-sm">
                    NOVA Intelligence
                  </span>
                  <span className="px-2 py-1 rounded bg-white text-blue-900 text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    Nouveau
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Serveur MCP & IA Ready</h3>
                <p className="text-blue-100 dark:text-neutral-300 max-w-2xl font-medium">
                  Connectez vos assistants IA (Claude, Cursor) directement au contexte du projet via le protocole MCP.
                  Interrogation structurelle, automatisation et génération de code contextuelle.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pr-8">
                 <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm text-sm font-mono text-green-300 flex items-center gap-2 shadow-inner">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      MCP Server Active
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm text-sm font-mono text-blue-200 flex items-center gap-2 opacity-90 shadow-inner">
                      <Terminal className="w-3 h-3" />
                      Context: 100%
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Carte 1: Modèle de données (Large) */}
            <div className="md:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-32 h-32 text-blue-500" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="h-10 px-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 flex items-center">
                    NOVA Core
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Modèle de données commun</h3>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mb-8">
                  Définition déclarative du domaine métier. Génération automatique du code et des schémas de base de données pour garantir la cohérence sémantique.
                </p>
                
                {/* Visualisation abstraite Data */}
                <div className="flex gap-4 items-center p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">TS</div>
                    <div className="text-[10px] text-neutral-400">TypeScript</div>
                  </div>
                  <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700"></div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center border border-neutral-300 dark:border-neutral-700">
                       <Box className="w-5 h-5 text-neutral-500" />
                     </div>
                     <div className="text-[10px] text-neutral-400">Schema Registry</div>
                  </div>
                  <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700"></div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">SQL</div>
                    <div className="text-[10px] text-neutral-400">Database</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2: Design System (Verticale) */}
            <div className="md:col-span-1 md:row-span-2 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="h-10 px-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800 flex items-center">
                  NOVA Spectrum
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Design System</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Langage visuel unique et moderne. Bibliothèque de composants UI générée automatiquement depuis Figma.
              </p>

              {/* Visualisation UI Components */}
              <div className="mt-auto space-y-3">
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-500"></div>
                  <div className="h-2 w-20 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <div className="h-2 w-16 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                  Action Button
                </div>
              </div>
            </div>

            {/* Carte 3: Infrastructure */}
            <div className="md:col-span-1 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <span className="h-10 px-4 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold border border-orange-200 dark:border-orange-800 flex items-center">
                    NOVA Station
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Infrastructure</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                  Modèles d'architecture prêts à l'emploi (IaC). Sécurité et CI/CD intégrés.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400">Terraform</span>
                <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400">Docker</span>
                <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400">AWS</span>
              </div>
            </div>

            {/* Carte 4: Documentation */}
            <div className="md:col-span-1 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
               <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="h-10 px-4 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 flex items-center">
                    NOVA Codex
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Documentation</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                  Documentation vivante générée depuis le code.
                </p>
               </div>
               <div className="grid grid-cols-2 gap-2">
                 <div className="h-16 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 p-2">
                   <div className="w-8 h-1 mb-2 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                   <div className="w-full h-1 mb-1 bg-neutral-100 dark:bg-neutral-800/50 rounded"></div>
                   <div className="w-2/3 h-1 bg-neutral-100 dark:bg-neutral-800/50 rounded"></div>
                 </div>
                 <div className="h-16 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 p-2 opacity-50">
                   <div className="w-8 h-1 mb-2 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                   <div className="w-full h-1 mb-1 bg-neutral-100 dark:bg-neutral-800/50 rounded"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" className="py-24 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
        {/* Background Elements - Subtle grid for both modes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_70%)] animate-pulse duration-10000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-200 dark:border-blue-800">
              <Globe className="w-3 h-3" />
              Multi-Language Support
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
              Compatible avec votre stack actuelle
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              NOVA est agnostique et s'intègre parfaitement avec les technologies les plus populaires du marché. Ne changez pas vos outils, améliorez-les.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <LanguageCard 
              icon={<TechLogos.NodeJS className="w-12 h-12" />} 
              name="Node.js" 
              description="Backend & API"
            />
            <LanguageCard 
              icon={<TechLogos.CSharp className="w-12 h-12" />} 
              name="C#" 
              description=".NET Ecosystem"
            />
            <LanguageCard 
              icon={<TechLogos.PHP className="w-12 h-12" />} 
              name="PHP" 
              description="Symfony / Laravel"
            />
            <LanguageCard 
              icon={<TechLogos.Python className="w-12 h-12" />} 
              name="Python" 
              description="Data & AI"
            />
            <LanguageCard 
              icon={<TechLogos.Go className="w-12 h-12" />} 
              name="Go" 
              description="Microservices"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
             <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Génération SDK</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Clients API générés automatiquement pour tous les langages supportés. Typage fort garanti.
                </p>
             </div>
             <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Interopérabilité</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Vos services communiquent sans friction, quel que soit le langage d'implémentation.
                </p>
             </div>
             <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-green-500/50 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Standards Ouverts</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Basé sur OpenAPI, gRPC et AsyncAPI pour une compatibilité maximale avec l'écosystème.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-purple-200 dark:border-purple-800">
                <ShieldCheck className="w-3 h-3" />
                Safe & Secure
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                Sécurité intégrée
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                La sécurité n'est pas une option, c'est une fondation. NOVA intègre nativement les dernières normes de sécurité et de confidentialité pour protéger vos données et celles de vos utilisateurs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Authentification Forte</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Support natif OAuth2, OIDC et MFA. Gestion des sessions sécurisée.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Chiffrement de bout en bout</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Données chiffrées au repos et en transit (TLS 1.3, AES-256).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Conformité & Audit</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Logs d'audit centralisés, conformité RGPD et traçabilité complète.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0">
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Accessibilité RGAA</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Composants inclusifs respectant les normes WCAG 2.1 et RGAA.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
                <div className="flex justify-center mb-8 relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 relative z-10">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-24 h-24 rounded-full bg-purple-500/50 animate-ping opacity-20"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg px-4 py-2 flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> Security
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-2 flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> RGPD Ready
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-2 flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> OWASP Top 10
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2 flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> SOC2 Compliant
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg px-4 py-2 flex items-center gap-2 text-orange-700 dark:text-orange-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> RGAA / WCAG
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg px-4 py-2 flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    <Check className="w-3 h-3" /> Audit Logs
                  </div>
                </div>
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Grid */}
      <section id="benefits" className="py-24 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi adopter NOVA ?</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Zap />}
              title="Accélérer le Time-to-Market"
              description="Démarrez un produit en quelques heures plutôt qu'en plusieurs semaines grâce aux templates prêts à l'emploi."
            />
            <BenefitCard 
              icon={<ShieldCheck />}
              title="Garantir la cohérence"
              description="Une source de vérité unique pour le métier et une expérience utilisateur homogène entre les filiales."
            />
            <BenefitCard 
              icon={<Users />}
              title="Optimiser les ressources"
              description="Réduisez les coûts de maintenance et de formation en mutualisant la base technique."
            />
          </div>

          <div className="mt-16 p-8 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Prêt à contribuer ?</h3>
              <p className="text-neutral-600 dark:text-neutral-400">NOVA est un projet communautaire. Rejoignez la Core Team ou proposez une RFC.</p>
            </div>
            <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
              <Code2 className="w-5 h-5" />
              Accéder au Repo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-neutral-900 dark:bg-white rounded flex items-center justify-center text-white dark:text-neutral-900 text-xs font-bold">
              N
            </div>
            <span className="font-bold text-neutral-900 dark:text-white">NOVA Project</span>
          </div>
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Groupe Nova. Documentation interne confidentielle.
          </div>
        </div>
      </footer>
    </div>
  );
}

function PillarCard({ icon, title, description, features }: { icon: React.ReactNode, title: string, description: string, features: string[] }) {
  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all hover:shadow-lg group">
      <div className="mb-6 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-neutral-500 dark:text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function LanguageCard({ icon, name, description }: { icon: React.ReactNode, name: string, description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all cursor-default group shadow-sm dark:shadow-none">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{name}</h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">{description}</p>
    </div>
  );
}
