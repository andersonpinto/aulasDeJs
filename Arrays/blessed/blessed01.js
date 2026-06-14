const blessed = require('blessed');
const contrib = require('blessed-contrib');

const screen = blessed.screen();
const grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

// Gráfico de linha
const line = grid.set(0, 0, 6, 12, contrib.line, {
  label: 'Temperatura (°C)',
  showLegend: true,
  style: { line: 'red', text: 'white', baseline: 'black' }
});

// Tabela
const table = grid.set(6, 0, 6, 12, contrib.table, {
  keys: true,
  fg: 'green',
  label: 'Sensores',
  columnSpacing: 2,
  columnWidth: [20, 10]
});

// Dados iniciais
let xLabels = ['10h', '11h', '12h', '13h'];
let yValues = [22, 24, 23, 25];

// Função para atualizar os dados
function atualizarDados() {
  const hora = new Date().toLocaleTimeString().slice(0, 5);
  const novaTemp = Math.floor(Math.random() * 10) + 20;

  xLabels.push(hora);
  yValues.push(novaTemp);

  if (xLabels.length > 10) {
    xLabels.shift();
    yValues.shift();
  }

  line.setData([{ title: 'Sensor 1', x: xLabels, y: yValues }]);

  table.setData({
    headers: ['Sensor', 'Status'],
    data: [
      ['Sensor 1', 'OK'],
      ['Sensor 2', Math.random() > 0.8 ? 'Falha' : 'OK'],
      ['Sensor 3', 'OK']
    ]
  });

  screen.render();
}

// Atualiza a cada 2 segundos
setInterval(atualizarDados, 2000);

// Tecla para sair
screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

screen.render();
