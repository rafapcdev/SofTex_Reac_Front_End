Mini aplicação de tarefas (Projeto Final)

Como usar:

- No projeto principal, importe o componente `TaskApp` de `src/projeto-final-react/TaskApp.jsx` e adicione em `App.jsx` para ver a mini aplicação.

Exemplo:

```jsx
import TaskApp from './projeto-final-react/TaskApp';

function App() {
  return (
    <div className="pt-16">
      <TaskApp />
    </div>
  );
}
```

Funcionalidades:
- Adicionar tarefas (formulário controlado)
- Marcar como concluída
- Remover tarefas
- Persistência local via localStorage (useEffect)

Esta mini app demonstra uso de `useState`, `useEffect`, componentes reutilizáveis, comunicação via props e estilo modular.
