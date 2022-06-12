import './style.css'

document.querySelector('#app').innerHTML = `
<table class="table">
  <thead id="titulo" hidden>
    <tr>
      <th scope="col">Composicion corporal</th>
      <th scope="col">Índice de masa corporal</th>
    </tr>
  </thead>
  <tbody>
    <tr id="inferior" hidden>
      <td>Peso inferior al normal</td>
      <td>Menos de 18.5</td>
    </tr>
    <tr id="normal" hidden>
      <td>Normal</td>
      <td>18.5-24.9</td>
    </tr>
    <tr id="superior" hidden>
      <td>Peso superior al normal</td>
      <td>25.0-29.9</td>
    </tr>
    <tr id="obesidad" hidden>
      <td>Obesidad</td>
      <td>Más de 30.0</td>
    </tr>
  </tbody>
</table>
`

