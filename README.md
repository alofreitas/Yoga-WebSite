# 🍃​ Taíse Yoga - Website

<img width="91" height="103" alt="Logo Taíse" src="https://github.com/user-attachments/assets/244a1c8e-6530-47e3-95cd-0ddd43718485" />

## Funcionalidades Principais

* **Landing Page Completa:** Seções detalhadas incluindo Hero (Banner), Benefícios, Biografia da instrutora, Planos de Preços, FAQ (Perguntas Frequentes) e Depoimentos de clientes.
* **Single Page Application (SPA):** Navegação instantânea e sem recarregamento de página entre as rotas de *Home*, *Login* e *Cadastro*, gerenciada pelo Angular Router.
* **Scrolling:** Navegação entre as seções da página principal utilizando âncoras HTML e CSS nativo.
* **Formulários Reativos:** Gerenciamento de estado e validação de dados para as seções de "Fale Conosco" e fluxos de autenticação, utilizando o `ReactiveFormsModule` do Angular.
* **Tipografia:** Integração otimizada com o Google Fonts, utilizando as famílias *Cormorant Garamond* (títulos) e *Open Sans* (corpo de texto).

## Tecnologias Utilizadas

* **Framework:** [Angular](https://angular.dev/) (Utilizando a nova arquitetura de *Standalone Components*)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)

## 📁 Estrutura de Pastas Destacada

A arquitetura do projeto foi pensada para separação clara de responsabilidades, seguindo as melhores práticas do Angular moderno:

```text
taise-yoga-landing/
├── public/                 
│   └── assets/             
│       ├── images/         # Imagens de fundo e fotos de perfil
│       └── icons/          # Logotipos e ícones SVG (checks, setas, etc.)
├── src/
│   ├── app/
│   │   ├── pages/          # Páginas Roteáveis (Home, Login, Cadastro)
│   │   ├── sections/       # Componentes de UI reutilizáveis (Header, Hero, Pricing...)
│   │   ├── app.config.ts   # Configuração de Rotas (Router Providers)
│   │   └── app.ts          # Componente Raiz da Aplicação (RouterOutlet)
│   ├── index.html          # Ponto de entrada HTML e importação de fontes
│   ├── main.ts             # Bootstrap da aplicação
│   └── styles.scss         # Estilos globais (Variáveis de cor, tipografia global)
