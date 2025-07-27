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
3. O arquivo `anotacoes_db.json` será baixado automaticamente

### Sincronizando Entre Dispositivos

#### Quando você adiciona/deleta anotações:
1. O arquivo `anotacoes_db.json` será baixado automaticamente
2. Substitua o arquivo `anotacoes_db.json` no seu repositório pelo arquivo baixado
3. Faça commit e push no GitHub:
   ```bash
   git add anotacoes_db.json
   git commit -m "Atualizar anotações"
   git push origin main
   ```

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
- ✅ Sincronização via GitHub
- ✅ Compatível com Safari antigo (iPad Mini 1)

## 🔧 Compatibilidade

- Safari (iPad Mini 1 e versões mais recentes)
- Chrome, Firefox, Edge
- Funciona offline (localStorage como backup)

## 📝 Formato das Anotações

Cada anotação contém:
- **Matéria**: Ex: Arquivologia, Direito Constitucional
- **Assunto**: Ex: Técnicas de arquivamento, Princípios constitucionais
- **Texto**: A anotação em si
- **Data**: Data de criação automática

## 🚨 Importante

- Sempre faça backup do arquivo `anotacoes_db.json` antes de fazer alterações
- Se houver conflitos, o arquivo mais recente será usado
- Use o botão "Fazer Backup" regularmente para criar cópias de segurança
- O sistema de banco é compatível com Safari antigo (iPad Mini 1) 