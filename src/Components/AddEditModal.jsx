import React, { useState } from 'react';
import {Button,Modal, Form, Input} from "antd";
import { connect } from 'react-redux';
import { AddBooks, EditBookDetails} from "../Actions";
import TextArea from "antd/es/input/TextArea";

const AddEditModal = (props) => {
    const [form] = Form.useForm();

    const handleOnCancel = () => {
       props.setVisible(false);
       props.setCurrentBookDetails(props.defaultBookDetails);
       form.resetFields();
    }
    const handleOnFinish = values => {
       if(props.isEditable){
           props.EditBookDetails(values);
           props.setCurrentBookDetails(props.defaultBookDetails);
           props.setIsEditable(false);
       }else{
           props.AddBooks(values);
       }
        props.setVisible(false);
        form.resetFields();
    }

    return(
        <div>
            <Modal
                visible = {props.visible}
                title = "Add your book details"
                footer = {null}
                onCancel = {handleOnCancel}
            >
                <Form
                    form = {form}
                    name="control-ref"
                    layout="vertical"
                    onFinish={handleOnFinish}
                    initialValues={form.setFieldsValue(props.currentBookDetails)}
                >
                    <Form.Item
                        name="id"
                        label="id"
                        style={{ display: "none"}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Title"
                        rules={[
                            {required: true, message: "Book Title is Mandatory!!"}
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            {required: true, message: "Enter the Book's price!!"}
                        ]}
                    >
                        <Input prefix="$" suffix="CAD" />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[
                            {required: true, message: "Mention Book's Category!!"}
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {required: true, message: "Description Book's Category!!"}
                        ]}
                    >
                        <TextArea/>
                    </Form.Item>
                    <Form.Item>
                        <div className="buttons">
                            <Button onClick={handleOnCancel}>Cancel</Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}


export default connect(null, { AddBooks, EditBookDetails})(AddEditModal);