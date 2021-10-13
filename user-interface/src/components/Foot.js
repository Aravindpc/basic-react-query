import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space} from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Foot = () => {
  return ( 
     <div className="icons-list">
       <Space size='large'>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
    </Space>
  </div>
  );
}
 
export default Foot;