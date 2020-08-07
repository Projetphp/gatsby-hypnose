import React from "react"
import { Modal, Button } from "antd"
import "antd/dist/antd.css"

class Modalhome extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
          bodyStyle="font-color:green"
        >
          Prendre rendez-vous
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        ></Modal>
      </>
    )
  }
}

export default Modalhome
