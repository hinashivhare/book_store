import React, {useState} from 'react';
import {connect} from 'react-redux';
import {List, Card, Button, Space, Typography} from 'antd';
import {DeleteOutlined} from "@ant-design/icons"
import AddEditModal from "./AddEditModal";
import {ReadOutlined} from '@ant-design/icons';
import DeleteBooks from "./DeleteBooks";

const defaultBookDetails = {
    name: "",
    price: "",
    category: ""
};
const BooksList = (props) => {
    const [visible, setVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [deleteBookDetails, setDeleteBookDetails] = useState(defaultBookDetails);
    const [currentBookDetails, setCurrentBookDetails] = useState(defaultBookDetails);
    const [isEditable, setIsEditable] = useState(false);
    const {Paragraph, Text} = Typography;

    const onEditClickHandle = item => {
        setVisible(true);
        setIsEditable(true);
        setCurrentBookDetails(item);
    };

    const onDeleteClickHandle = item => {
        setDeleteVisible(true);
        setDeleteBookDetails(item);
    };

    return (
        <div>
            <div className="header">
                <div>
                    <ReadOutlined style={{fontSize: "20px"}}/>
                    <Text className="logo">Book Cellar</Text>
                </div>
                <Button size="large" shape="round" type="primary" onClick={() => setVisible(true)}>Add Book</Button>
            </div>
            <div className="body">
                <AddEditModal
                    setVisible={setVisible}
                    visible={visible}
                    isEditable={isEditable}
                    setCurrentBookDetails={setCurrentBookDetails}
                    currentBookDetails={currentBookDetails}
                    defaultBookDetails={defaultBookDetails}
                    setIsEditable={setIsEditable}
                />
                <DeleteBooks
                    deleteVisible={deleteVisible}
                    setDeleteVisible={setDeleteVisible}
                    deleteBookDetails={deleteBookDetails}/>
                <List
                    grid={{gutter: 16}}
                    dataSource={props.booksList}
                    renderItem={item => (
                        <List.Item>
                            <Space direction="vertical">
                                <Card className="book_card" onClick={() => onEditClickHandle(item)} title={item.name}>
                                    <div>
                                        <Paragraph>Price: CAD {item.price}</Paragraph>
                                        <Paragraph ellipsis={{
                                            rows: 2,
                                            expandable: false
                                        }}>Category: {item.category} </Paragraph>
                                    </div>
                                </Card>
                                <Button danger icon={<DeleteOutlined/>}
                                        onClick={() => onDeleteClickHandle(item)}>Delete</Button>
                            </Space>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        booksList: state.books
    };
}

export default connect(mapStateToProps)(BooksList)