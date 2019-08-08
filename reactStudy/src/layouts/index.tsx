import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
const { SubMenu } = Menu;

function Layouts(props: any) {
  const { children } = props;
  const [current, setCount] = useState('/hook');
  const handleClick = (e: any) => {
    setCount(e.key);
  };
  const config = [
    {
      title: 'react',
      item: [
        {
          name: 'ForwardRef',
          link: '/forwardRef'
        },
        {
          name: 'Hook',
          link: '/hook'
        },
        {
          name: 'Context',
          link: '/context'
        }
      ]
    }
  ];
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {config.map((item: any) => (
          <SubMenu key={item.title} title={item.title}>
            {item.item.map((items: any) => (
              <Menu.Item key={items.link}>
                <Link to={items.link}>{items.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
      {children}
    </div>
  );
}
export default Layouts;
