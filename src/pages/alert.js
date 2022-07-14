import React from "react";
import { Table } from 'antd';


export default function Alert() {
    const columns = [
        {
          title: '告警ID',
          dataIndex: 'alert_id',
          key: 'alert_id',
        },
        {
          title: '告警名称',
          dataIndex: 'alert_name',
          key: 'alert_name',
        },
        {
          title: '处理人',
          dataIndex: 'handler',
          key: 'handler',
        },
        {
            title: '触发时间',
            dataIndex: 'alert_time',
            key: 'alert_time',
          },
    ]
    const data = [
        {
            alert_id: 'alert_id_1',
            alert_name: '告警1',
            status: '触发',
            handler: '',
            alert_time: '2021-12-01',
        },
        {
            alert_id: 'alert_id_2',
            alert_name: '告警2',
            status: '恢复',
            handler: '小明',
            alert_time: '2021-12-02',
        },
    ]
    return (
        <Table columns={columns} dataSource={data} />
    )
}