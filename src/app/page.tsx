'use client'
import { University } from "@/type/type";
import { Table } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<University[]>([])
  const [countryList, setCountryList] = useState<any>([])
  const getData = async () => {
    const country = ''
    const name = ''
    const res = await fetch(`http://universities.hipolabs.com/search?country=${country}&name=${name}`)
    const resJSON = await res.json()
    setData(resJSON)
  }

  useEffect(() => {
    const countryData = data.map((val) => val.country).filter((country, i, self) => self.indexOf(country) === i)
    setCountryList(countryData)
  }, [data])

  const columns = [
    {
      title: 'rows',
      dataIndex: 'key',
      key: 'key',
      width: "3%",
    },
    {
      title: 'University',
      dataIndex: 'name',
      key: 'name',
      width: "20%"
    },
    {
      title: 'Provience',
      dataIndex: 'state-province',
      key: 'provience',
      width: "25%"
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'university',
      width: "20%",
      filters: countryList.map((country: string) => ({
        text: country,
        value: country
      })),
      onFilter: (val: any, record: any) => record.country === val
    },
    {
      title: 'Domain',
      dataIndex: 'domains',
      key: 'domain'
    }
  ]
  const tableData =
    data.map((val, i) => {
      return {
        key: i,
        name: val.name,
        "state-province": val["state-province"] != null ? val["state-province"] : '-',
        country: val.country,
        domains: val.domains
      }
    })

  console.log(tableData)
  useEffect(() => {
    getData()

  }, [])
  return (
    <section>
      <Table
        columns={columns}
        dataSource={tableData}
      />
    </section>
  );
}