import React from "react"

export default function Main() {
    let title = "Заголовок первого уровня"
    const obj = {
        name: "Name",
        age: 99,
        student: false
    }

    const arr = [1, "date", 3, 4, 5]

    function dataInfo(name) {
        return `name: ${name}`
    }
    return (
        <div>
            <h1 className="h1">Hello world!</h1>
            <div className="">10 + 5 = {10+5}</div>
            <h1>{title}</h1>
            <h2>{obj.student}</h2>
            {
                arr.map((item, index) => {
                    return <div key={index}>{index} - {item}</div>
                })
            }
            <p>My {dataInfo('Родион')}</p>
        </div>
    )
}
