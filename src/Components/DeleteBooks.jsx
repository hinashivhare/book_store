import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { DeleteBOok } from "../Actions";

const DeleteBooks = (props) => {

    const handleOnCancel = () => {
       props.setDeleteVisible(false);
    }

    const handleOnOk = () => {
        props.DeleteBOok(props.deleteBookDetails.id);
        props.setDeleteVisible(false);
    }
    return(
        <div>
            <Modal
                title = "Warning!!"
                visible = {props.deleteVisible}
                onCancel = {handleOnCancel}
                onOk = {handleOnOk}
            >
                <p>Are you sure that you want to delete your book</p>
                <h4>  {props.deleteBookDetails.name} ?</h4>
            </Modal>
        </div>
    );
}

export default connect( null, { DeleteBOok } )(DeleteBooks);