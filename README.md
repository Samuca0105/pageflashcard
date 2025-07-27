# 📚 Anotações para Concursos

Aplicação web para organizar anotações de estudos para concursos, com sincronização via GitHub.

## 🚀 Como Usar

### Primeira Configuração
1. Clone este repositório em todos os dispositivos onde você quer usar
2. Abra o arquivo `index.html` no navegador
3. A primeira anotação de Arquivologia já estará carregada

### Adicionando Anotações
1. Preencha os campos: Matéria, Assunto e Anotação
2. Clique em "Adicionar Anotação"
3. As anotações são salvas localmente no navegador

### Sincronizando Entre Dispositivos

#### Para enviar suas anotações para o GitHub:
1. Clique em "Exportar para GitHub"
2. O arquivo `anotacoes_db.json` será baixado
3. Substitua o arquivo no seu repositório
4. Faça commit e push no GitHub:
   ```bash
   git add anotacoes_db.json
   git commit -m "Atualizar anotações"
   git push origin main
   ```

#### Para receber anotações do GitHub:
1. Clique em "Importar do GitHub"
2. As anotações serão carregadas automaticamente

### Backup e Segurança
- Use o botão "Fazer Backup" para criar cópias de segurança
- Os backups incluem timestamp para identificação
- Mantenha backups em local seguro

#### Para atualizar em outros dispositivos:
1. Faça pull do repositório:
   ```bash
   git pull origin main
   ```
2. Recarregue a página no navegador
3. As novas anotações aparecerão automaticamente

## 📁 Estrutura dos Arquivos

- `index.html` - Aplicação principal
- `db.js` - Sistema de banco de dados simples
- `anotacoes_db.json` - Banco de dados das anotações
- `README.md` - Este arquivo de instruções

## ✨ Funcionalidades

- ✅ Adicionar anotações organizadas por matéria
- ✅ Buscar nas anotações existentes
- ✅ Deletar anotações
- ✅ Agrupamento automático por matéria
- ✅ Interface colapsável
- ✅ Salvamento local (sem download automático)
- ✅ Sincronização manual com GitHub
- ✅ Compatível com Safari antigo (iPad Mini 1)

## 🔧 Compatibilidade

- Safari (iPad Mini 1 e versões mais recentes)
- Chrome, Firefox, Edge
- Funciona offline (salvamento local no navegador)

## 📝 Formato das Anotações

Cada anotação contém:
- **Matéria**: Ex: Arquivologia, Direito Constitucional
- **Assunto**: Ex: Técnicas de arquivamento, Princípios constitucionais
- **Texto**: A anotação em si
- **Data**: Data de criação automática

## 🚨 Importante

- As anotações são salvas localmente no navegador
- Use "Exportar para GitHub" quando quiser sincronizar
- Use "Importar do GitHub" para receber atualizações
- Use o botão "Fazer Backup" regularmente para criar cópias de segurança
- O sistema funciona offline e é compatível com Safari antigo (iPad Mini 1) 