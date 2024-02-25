export const initialData = {
    type: "1",
    multiple: "false",
    graph: {
        type: "1",
        color: "2",
        data: [],
        barScale: null,
        showAxisLabels: null,
        showLegend: null,
        legendData: []
    },
    summary: {
        color: "2",
        text: "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in engagement after these hours, with the number of emails opened decreasing significantly, possibly due to various factors such as winding down from the day's activities or transitioning to personal time."
    },
    data: {
        color: "2",
        toggleType: "2",
        labels: [
            "Product",
            "Reusable",
            "Natural Resources",
            "Compost Compound",
            "Reusable Materials",
            "Total"
        ],
        data: [
            [
                "Q1-23",
                "10%",
                "2%",
                "7%",
                "3%",
                "8%"
            ],
            [
                "Q2-23",
                "4%",
                "11%",
                "5%",
                "4%",
                "12%"
            ]
        ]
    }
}

export const lineData = [
    {
        "name": "",
        "Christmas": 14,
        "BirthdaySpecial25": 6,
        "Newuser30": 20,
        "Newuser35": 0,
        "Newuser40": 10
    },
    {
        "name": "Google",
        "Christmas": 11,
        "BirthdaySpecial25": 20,
        "Newuser30": 27.5,
        "Newuser35": 3,
        "Newuser40": 14
    },
    {
        "name": "Instagram",
        "Christmas": 4,
        "BirthdaySpecial25": 27,
        "Newuser30": 11,
        "Newuser35": 2,
        "Newuser40": 20
    },
    {
        "name": "Facebook",
        "Christmas": 9,
        "BirthdaySpecial25": 3,
        "Newuser30": 12,
        "Newuser35": 1.5,
        "Newuser40": 18
    },
    {
        "name": "Tiktok",
        "Christmas": 8,
        "BirthdaySpecial25": 2,
        "Newuser30": 27,
        "Newuser35": 5,
        "Newuser40": 14
    }
]

export const barData = [
    {
        "name": "Bar Graph",
        "a": 25,
        "space1": 10,
        "b": 39,
        "space2": 10,
        "c": 16,
        "space3": 10,
        "d": 27,
        "space4": 10,
        "e": 5,
        "space5": 10,
        "f": 20
    }
]

export const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
]
