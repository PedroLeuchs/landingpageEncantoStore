# Tipografia do Projeto

## Família e Fallbacks
- Heading: `Playfair Display` com fallback `ui-serif, Georgia, Cambria, Times`.
- Body: `Inter` com fallback `ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial`.

## Utilitários
- `.font-heading`: aplica família de títulos.
- `.font-body`: aplica família de corpo.
- `.type-title`: título principal, peso 700, altura de linha 1.1, tamanho responsivo.
- `.type-subtitle`: subtítulo, peso 600, altura de linha 1.2.
- `.type-body`: texto de corpo, peso 400, altura de linha 1.6.

## Uso por Componente
- Wrappers de página: use `font-body` no contêiner raiz.
- Títulos de seção: use `type-title`.
- Subtítulos e card headings: use `type-subtitle`.
- Parágrafos e descrições: use `type-body`.

## Acessibilidade e Legibilidade
- Evite tamanhos abaixo de 14px para corpo em mobile.
- Mantenha contraste AA entre `text-foreground` e fundo.
- Sobre `primary`, prefira `text-white` ou `text-background` conforme contraste.

## Exemplos
```tsx
// Título
<h2 className="type-title">Produtos</h2>

// Subtítulo
<h3 className="type-subtitle">Coleção Premium</h3>

// Corpo
<p className="type-body">Qualidade e conforto com design elegante.</p>
```