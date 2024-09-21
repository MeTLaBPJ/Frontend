const a = {
    rooms: [{
        id: 3,
        title: "프로그래밍 기초",
        subTitle: "프로그래밍의 기초를 배워봅시다",
        members: [
            { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "sd" },
            { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
            { gender: "Male", major: "asd", studentId: "20210004", nickname: "Bob", profileImage: "sd" },

        ],
        maxMembers: 6,
        enterCheck: false,
        host: "asdfasdf1234346",
        maleCount: 2,
        femaleCount: 1
    },
    {
        id: 4,
        title: "프로그래밍 기초",
        subTitle: "프로그래밍의 기초를 배워봅시다",
        members: [
            { gender: "Female", major: "Physics", studentId: "20210003", nickname: "Alice", profileImage: "sd" },
            { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
            { gender: "Female", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
            { gender: "Male", major: "Mathematics", studentId: "20210004", nickname: "Bob", profileImage: "sd" },
            { gender: "Female", major: "asd", studentId: "20210004", nickname: "한준서", profileImage: "sd" }
        ],
        maxMembers: 6,
        enterCheck: false,
        host: "asdfasdf1234346",
        maleCount: 2,
        femaleCount: 3,
    }, //쭉쭉쭉 있음
    ],
    possibleEnterNumber: 3,
    gender: "male"
}