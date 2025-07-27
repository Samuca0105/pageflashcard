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

#### Dispositivo Principal (para editar):
1. Adicione suas anotações normalmente
2. Ao final do estudo, clique em "Fazer Backup"
3. O arquivo será baixado com timestamp
4. Faça upload do arquivo no GitHub
5. Renomeie para `anotacoes_db.json`

#### Dispositivo Secundário (apenas para visualizar):
1. Acesse a mesma página no GitHub
2. As anotações carregam automaticamente do arquivo `anotacoes_db.json`
3. Use apenas para revisão (não edite neste dispositivo)

### Backup e Segurança
- Use o botão "Fazer Backup" ao final de cada sessão de estudo
- Os arquivos incluem timestamp para controle de versão
- Mantenha o arquivo `anotacoes_db.json` sempre atualizado no GitHub

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
- ✅ Backup manual para GitHub
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
- Use "Fazer Backup" ao final de cada sessão de estudo
- O segundo dispositivo serve apenas para visualização/revisão
- Mantenha o arquivo `anotacoes_db.json` atualizado no GitHub
- O sistema funciona offline e é compatível com Safari antigo (iPad Mini 1) 