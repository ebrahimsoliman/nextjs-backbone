import React from 'react';
import {
    Button,
    Dropdown,
    Menu
}            from "antd";

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://www.antgroup.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://www.aliyun.com">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

//props used to parent to child data communication between components
function EventEmitChild(props) {
    let d = 'data from child'
    props.onEventEmit(d)
    return (
        <Dropdown overlay={menu}
                  placement="bottomLeft"
                  arrow>
            <Button>bottomLeft</Button>
        </Dropdown>
    );
}

export default EventEmitChild;
