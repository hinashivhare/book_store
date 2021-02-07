import React, {useState} from 'react';
import {connect} from 'react-redux';
import {List, Card, Button, Space} from 'antd';
import { DeleteBOok} from "../Actions";
import { DeleteOutlined } from "@ant-design/icons"
import AddEditModal from "./AddEditModal";

const defaultBookDetails = {
    name: "",
    price: "",
    category: ""
};
const BooksList = (props) => {
    const [visible, setVisible] = useState(false);
    const [currentBookDetails, setCurrentBookDetails] = useState(defaultBookDetails);
    const[isEditable, setIsEditable] = useState(false);

    const onEditClickHandle = item => {
        setVisible(true);
        setIsEditable(true);
        setCurrentBookDetails(item);
    };

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}>Add Book</Button>
            <AddEditModal
                setVisible={setVisible}
                visible={visible}
                isEditable={isEditable}
                setCurrentBookDetails={setCurrentBookDetails}
                currentBookDetails={currentBookDetails}
                defaultBookDetails = {defaultBookDetails}
                setIsEditable={setIsEditable}/>
            <List
                grid={{gutter: 16, column: 4}}
                dataSource={props.booksList}
                renderItem={item => (
                    <List.Item>
                        <List.Item>
                            <Space direction="vertical">
                                <Card onClick={() => onEditClickHandle(item)}  title={item.name}>
                                    <div>
                                        <p>Price: CAD {item.price}</p>
                                        <p>Category: {item.category}</p>
                                    </div>
                                </Card>
                                <Button icon={<DeleteOutlined />} onClick={() => props.DeleteBOok(item.id)}>Delete</Button>
                            </Space>
                        </List.Item>
                    </List.Item>
                )}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        booksList: state.books
    };
}

export default connect(mapStateToProps, { DeleteBOok })(BooksList)