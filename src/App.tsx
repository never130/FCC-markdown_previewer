import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `
# ¡Bienvenido a mi previsualizador de Markdown en React!

## Este es un subtítulo...
### Y aquí hay otras cosas interesantes:

Aquí tienes algo de código, \`<div></div>\`, entre dos acentos graves.

\`\`\`
// esto es un código de varias líneas:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

También puedes poner texto en **negrita**... whoa!
O _cursiva_.
O... **_ambas!_**

También hay [links](https://www.freecodecamp.com), y
> Citas en bloque!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- Y, por supuesto, hay listas.
  - Algunas tienen viñetas.
      - Con diferentes niveles de sangría
        - Que se ven así.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (<>
    <div>
      <h1 style={{ textAlign: "center" }}>
        Markdown Previewer
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </h1>
    </div>
  </>
  )
}

export default App
