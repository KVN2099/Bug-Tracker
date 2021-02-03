import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];
    // The following is just dummy data for bug model
    data.push(new bugModel({
        _id: 345456,
        name: "Wont load",
        details: "Crashes after 6 seconds",
        steps: "Open application and it will crash",
        version: "v2.0",
        assigned: "Kevin Romero",
        creator: "Kevinho",
        priority: 1,
        time: "22:49"
    }));
    data.push(new bugModel({
        _id: 345456,
        name: "Wont load",
        details: "Crashes after 6 seconds",
        steps: "Open application and it will crash",
        version: "v2.0",
        assigned: "Kevin Romero",
        creator: "Kevinho",
        priority: 3,
        time: "22:49"
    }));
    data.push(new bugModel({
        _id: 345456,
        name: "asdf load",
        details: "Crashes after 6 seconds",
        steps: "Open application and it will crash",
        version: "v2.0",
        assigned: "Kevin Romero",
        creator: "Kevinho",
        priority: 1,
        time: "22:49"
    }));
    data.push(new bugModel({
        _id: 345456,
        name: "dfgh load",
        details: "Crashes after 6 seconds",
        steps: "Open application and it will crash",
        version: "v2.0",
        assigned: "Kevin Romero",
        creator: "Kevinho",
        priority: 2,
        time: "22:49"
    }));

    let sorted = data.sort((a, b) => { return a.priority - b.priority });   //  This will sort the bugs based on their priority

    return sorted;
}