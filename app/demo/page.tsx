"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/demo/button"
import { Card } from "@/components/demo/card"
import { Input } from "@/components/demo/input"
import { InputField } from "@/components/demo/input-field"
import { Badge } from "@/components/demo/badge"
import { Alert } from "@/components/demo/alert"
import { 
  Home, 
  Code2, 
  Palette, 
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  XCircle
} from "lucide-react"

export default function DemoPage() {
  const [inputValue, setInputValue] = useState("")
  const [buttonClicks, setButtonClicks] = useState(0)

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-xl font-bold tracking-tight">NOVA</span>
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium"
              >
                <Home className="w-4 h-4" />
                Accueil
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-100 dark:border-blue-800">
              <Code2 className="w-3 h-3" />
              Page de Démonstration
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
              Composants React - Zone de Test
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Cette page permet de tester et visualiser différents composants React utilisés dans le projet NOVA.
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Buttons Section */}
            <Card title="Boutons" icon={<Zap className="w-5 h-5" />}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" onClick={() => setButtonClicks(prev => prev + 1)}>
                    Bouton Principal
                  </Button>
                  <Button variant="secondary" onClick={() => setButtonClicks(prev => prev + 1)}>
                    Bouton Secondaire
                  </Button>
                  <Button variant="outline" onClick={() => setButtonClicks(prev => prev + 1)}>
                    Bouton Outline
                  </Button>
                  <Button variant="ghost" onClick={() => setButtonClicks(prev => prev + 1)}>
                    Bouton Ghost
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">
                    Petit
                  </Button>
                  <Button variant="primary" size="md">
                    Moyen
                  </Button>
                  <Button variant="primary" size="lg">
                    Grand
                  </Button>
                </div>
                <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Clics sur les boutons : <span className="font-bold text-blue-600 dark:text-blue-400">{buttonClicks}</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Inputs Section */}
            <Card title="Champs de saisie" icon={<Palette className="w-5 h-5" />}>
              <div className="space-y-4">
                <Input
                  label="Nom"
                  placeholder="Entrez votre nom"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="exemple@email.com"
                />
                <Input
                  label="Mot de passe"
                  type="password"
                  placeholder="••••••••"
                />
                <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Valeur saisie : <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{inputValue || "(vide)"}</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Badges Section */}
            <Card title="Badges" icon={<CheckCircle className="w-5 h-5" />}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Par défaut</Badge>
                  <Badge variant="success">Succès</Badge>
                  <Badge variant="warning">Avertissement</Badge>
                  <Badge variant="error">Erreur</Badge>
                  <Badge variant="info">Information</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default" size="sm">Petit</Badge>
                  <Badge variant="default" size="md">Moyen</Badge>
                  <Badge variant="default" size="lg">Grand</Badge>
                </div>
              </div>
            </Card>

            {/* Alerts Section */}
            <Card title="Alertes" icon={<AlertCircle className="w-5 h-5" />}>
              <div className="space-y-4">
                <Alert variant="success" title="Succès">
                  L'opération s'est terminée avec succès.
                </Alert>
                <Alert variant="error" title="Erreur">
                  Une erreur s'est produite lors du traitement.
                </Alert>
                <Alert variant="warning" title="Avertissement">
                  Veuillez vérifier vos informations avant de continuer.
                </Alert>
                <Alert variant="info" title="Information">
                  Voici une information importante à prendre en compte.
                </Alert>
              </div>
            </Card>

            {/* Input Field from Figma Section */}
            <Card title="Input Field (Figma)" icon={<Code2 className="w-5 h-5" />}>
              <div className="space-y-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Composant implémenté depuis le JSON Figma avec les styles exacts.
                </p>
                <InputField
                  placeholder="john.doe@nova.fr"
                />
                <InputField
                  label="Email"
                  placeholder="Entrez votre email"
                  helpText="Nous ne partagerons jamais votre email"
                />
                <InputField
                  label="Email avec erreur"
                  placeholder="email@exemple.com"
                  error="Veuillez entrer un email valide"
                />
                <InputField
                  label="Email désactivé"
                  placeholder="email@exemple.com"
                  disabled
                />
              </div>
            </Card>
          </div>

          {/* Interactive Demo Section */}
          <Card title="Démo Interactive" icon={<Code2 className="w-5 h-5" />}>
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-400">
                Cette section combine plusieurs composants pour créer une expérience interactive.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Input
                    label="Recherche"
                    placeholder="Tapez pour rechercher..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm">
                      Rechercher
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setInputValue("")}>
                      Effacer
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <p className="text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                      Résultats
                    </p>
                    {inputValue ? (
                      <div className="space-y-2">
                        <Badge variant="info">Recherche: {inputValue}</Badge>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {inputValue.length} caractère{inputValue.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-neutral-400 dark:text-neutral-500">
                        Aucune recherche en cours
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
          <p>Page de démonstration NOVA - Composants React</p>
        </div>
      </footer>
    </div>
  )
}


