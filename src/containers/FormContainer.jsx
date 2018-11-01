import React, { Component } from 'react'

class FormContainer extends Component {
  state = {}

  render() {
    return (
      <div>
        <form>
          <input placeholder="dirección" />
          <input placeholder="comentarios" />
          <input placeholder="hora de reporte" />
          <input placeholder="usuario" />
        </form>
      </div>
    )
  }
}

export default FormContainer