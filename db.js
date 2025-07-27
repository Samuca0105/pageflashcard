// Sistema de Banco de Dados Simples para Anotações
var SimpleDB = {
    // Nome do arquivo de banco
    dbFile: 'anotacoes_db.json',
    
    // Inicializar o banco
    init: function() {
        this.loadData();
    },
    
    // Carregar dados do localStorage
    loadData: function() {
        try {
            // Primeiro tenta carregar do localStorage
            var savedData = localStorage.getItem('anotacoesDB');
            if (savedData) {
                return JSON.parse(savedData);
            }
            
            // Se não existe no localStorage, tenta carregar do arquivo JSON
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.dbFile, false);
            xhr.send();
            
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                // Salvar no localStorage para uso futuro
                this.saveData(data);
                return data;
            } else {
                // Se arquivo não existe, criar com dados iniciais
                var initialData = [
                    {
                        "id": 1703123456789,
                        "materia": "Arquivologia",
                        "assunto": "Técnicas de arquivamento",
                        "texto": "01 - A Ata deve ser escrita em um único parágrafo, assinada ao final pelas pessoas que a presidiram e pelo seu redator.",
                        "data": "21/12/2023"
                    }
                ];
                this.saveData(initialData);
                return initialData;
            }
        } catch (e) {
            console.log('Erro ao carregar banco:', e);
            return [];
        }
    },
    
    // Salvar dados localmente (sem download automático)
    saveData: function(data) {
        try {
            // Salvar no localStorage
            localStorage.setItem('anotacoesDB', JSON.stringify(data));
            return true;
        } catch (e) {
            console.log('Erro ao salvar banco:', e);
            return false;
        }
    },
    
    // Buscar todas as anotações
    getAll: function() {
        return this.loadData();
    },
    
    // Adicionar nova anotação
    add: function(anotacao) {
        var data = this.loadData();
        data.push(anotacao);
        return this.saveData(data);
    },
    
    // Deletar anotação por ID
    delete: function(id) {
        var data = this.loadData();
        var newData = [];
        
        for (var i = 0; i < data.length; i++) {
            if (data[i].id != id) {
                newData.push(data[i]);
            }
        }
        
        return this.saveData(newData);
    },
    
    // Buscar anotações por termo
    search: function(termo) {
        var data = this.loadData();
        var resultados = [];
        
        termo = termo.toLowerCase();
        
        for (var i = 0; i < data.length; i++) {
            var anotacao = data[i];
            if (anotacao.materia.toLowerCase().indexOf(termo) != -1 ||
                anotacao.assunto.toLowerCase().indexOf(termo) != -1 ||
                anotacao.texto.toLowerCase().indexOf(termo) != -1) {
                resultados.push(anotacao);
            }
        }
        
        return resultados;
    },
    
    // Contar total de anotações
    count: function() {
        var data = this.loadData();
        return data.length;
    },
    
    // Fazer backup do banco
    backup: function() {
        var data = this.loadData();
        var timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        var backupFile = 'backup_anotacoes_' + timestamp + '.json';
        
        try {
            var jsonContent = JSON.stringify(data, null, 2);
            var blob = new Blob([jsonContent], {type: 'application/json'});
            
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = backupFile;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(link.href);
            
            alert('Backup criado: ' + backupFile);
            return true;
        } catch (e) {
            console.log('Erro ao criar backup:', e);
            return false;
        }
    },
    
    // Restaurar banco de backup
    restore: function(backupData) {
        try {
            var data = JSON.parse(backupData);
            if (Array.isArray(data)) {
                return this.saveData(data);
            } else {
                throw new Error('Formato de backup inválido');
            }
        } catch (e) {
            console.log('Erro ao restaurar backup:', e);
            return false;
        }
    },
    
    // Exportar dados para GitHub (download manual)
    exportToGitHub: function() {
        try {
            var data = this.loadData();
            var jsonContent = JSON.stringify(data, null, 2);
            
            var blob = new Blob([jsonContent], {type: 'application/json'});
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = this.dbFile;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(link.href);
            
            alert('Arquivo ' + this.dbFile + ' baixado!\n\nPara sincronizar:\n1. Substitua o arquivo no seu repositório\n2. Faça commit e push no GitHub');
            return true;
        } catch (e) {
            console.log('Erro ao exportar:', e);
            return false;
        }
    },
    
    // Importar dados do GitHub
    importFromGitHub: function() {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.dbFile, false);
            xhr.send();
            
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                this.saveData(data);
                alert('Dados importados com sucesso do GitHub!');
                return true;
            } else {
                alert('Arquivo ' + this.dbFile + ' não encontrado no servidor.');
                return false;
            }
        } catch (e) {
            console.log('Erro ao importar:', e);
            alert('Erro ao importar dados do GitHub.');
            return false;
        }
    }
}; 